"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, ArrowRight, Tv, Globe, Video, Users, Star, Zap, Crown, Building, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CommercialProposals() {
  const [activeTab, setActiveTab] = useState("publicidad")

  const tabs = [
    { id: "publicidad", label: "Publicidad" },
    { id: "programas", label: "Tu Programa" },
    { id: "franquicia", label: "Franquicia" },
  ]

  const tabContent = {
    publicidad: {
      title: "Publicidad en CafeClub TV",
      description: "Promociona tu marca o producto en nuestra plataforma y alcanza a miles de espectadores.",
      features: [
        { icon: <Globe className="w-5 h-5" />, text: "Alcance internacional" },
        { icon: <Users className="w-5 h-5" />, text: "Audiencia segmentada" },
        { icon: <Zap className="w-5 h-5" />, text: "Impacto inmediato" },
        { icon: <Star className="w-5 h-5" />, text: "Posicionamiento de marca" },
      ],
      plans: [
        {
          name: "Básico",
          price: "$299",
          features: [
            "1 spot de 30 segundos",
            "2 semanas de emisión",
            "Mención en redes sociales",
            "Reporte de alcance",
          ],
          popular: false,
        },
        {
          name: "Premium",
          price: "$599",
          features: [
            "2 spots de 30 segundos",
            "1 mes de emisión",
            "Mención en redes sociales",
            "Product placement",
            "Reporte detallado de métricas",
          ],
          popular: true,
        },
        {
          name: "Empresarial",
          price: "$999",
          features: [
            "4 spots de 30 segundos",
            "3 meses de emisión",
            "Campaña en redes sociales",
            "Product placement",
            "Entrevista exclusiva",
            "Análisis completo de resultados",
          ],
          popular: false,
        },
      ],
      image: "/images/hero1.png",
    },
    programas: {
      title: "Crea Tu Propio Programa",
      description: "Lanza tu programa en nuestra plataforma y llega a una audiencia global con tu contenido.",
      features: [
        { icon: <Tv className="w-5 h-5" />, text: "Producción profesional" },
        { icon: <Video className="w-5 h-5" />, text: "Distribución multiplataforma" },
        { icon: <Users className="w-5 h-5" />, text: "Audiencia establecida" },
        { icon: <Star className="w-5 h-5" />, text: "Monetización" },
      ],
      plans: [
        {
          name: "Emprendedor",
          price: "$499/mes",
          features: [
            "4 episodios mensuales",
            "Producción básica",
            "Distribución en plataforma",
            "Promoción en redes sociales",
          ],
          popular: false,
        },
        {
          name: "Profesional",
          price: "$899/mes",
          features: [
            "8 episodios mensuales",
            "Producción avanzada",
            "Distribución multiplataforma",
            "Campaña de promoción",
            "Monetización compartida",
          ],
          popular: true,
        },
        {
          name: "Corporativo",
          price: "$1499/mes",
          features: [
            "12 episodios mensuales",
            "Producción premium",
            "Distribución global",
            "Marketing integral",
            "Monetización preferencial",
            "Análisis de audiencia",
          ],
          popular: false,
        },
      ],
      image: "/images/hero2.png",
    },
    franquicia: {
      title: "Franquicia CafeClub TV",
      description:
        "Lleva nuestra marca a tu ciudad o país y desarrolla un negocio de medios exitoso con identidad local.",
      features: [
        { icon: <MapPin className="w-5 h-5" />, text: "Exclusividad territorial" },
        { icon: <Tv className="w-5 h-5" />, text: "Canal propio personalizado" },
        { icon: <Zap className="w-5 h-5" />, text: "Capacitación completa" },
        { icon: <Star className="w-5 h-5" />, text: "Soporte continuo" },
      ],
      plans: [
        {
          name: "Franquicia Ciudad",
          price: "$1,500 USD",
          subtitle: "Mantenimiento: $499/mes",
          features: [
            "Licencia exclusiva de transmisión local",
            "Uso oficial de la marca CaféClub",
            "Canal propio con identidad local",
            "Capacitación personalizada completa",
            "Promoción mensual en redes",
            "Acceso a comunidad de creadores",
            "Libertad para comercializar espacios",
            "Participación en transmisiones globales",
            "Soporte técnico y editorial continuo",
          ],
          popular: false,
          icon: <Building className="w-6 h-6" />,
        },
        {
          name: "Franquicia País",
          price: "$4,999 USD",
          subtitle: "Mantenimiento: $599/mes",
          features: [
            "Licencia exclusiva nacional",
            "Crear subfranquicias de ciudad",
            "Revender franquicias urbanas",
            "Canal Nacional CaféClub propio",
            "Apoyo para montar estudio central",
            "Representante exclusivo en web oficial",
            "Alianzas internacionales",
            "Red de ingresos compartidos",
            "Retransmisión destacada internacional",
            "Entrenamiento avanzado en IA y monetización",
            "Presencia en consejo de crecimiento",
          ],
          popular: true,
          icon: <Crown className="w-6 h-6" />,
        },
      ],
      image: "/images/hero3.png",
      philosophy: "Contamos historias que unen, transforman y despiertan. Somos comunicación con alma.",
      targetAudience: [
        "Comunicadores, periodistas y creadores digitales",
        "Líderes culturales, gestores sociales o comunitarios",
        "Agencias de medios locales",
        "Emprendedores apasionados por la transformación digital",
      ],
    },
  }

  const content = tabContent[activeTab as keyof typeof tabContent]

  return (
    <section id="commercial-proposals" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-heading">Propuestas Comerciales</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre las diferentes formas de colaborar con CafeClub TV y hacer crecer tu negocio
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center mt-8 mb-12 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-[#B01E23] text-white shadow-lg"
                    : "bg-accent text-foreground hover:bg-accent/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagen */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={content.image || "/placeholder.svg"}
              alt={content.title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6">
                <h3 className="text-white text-2xl font-bold font-heading">{content.title}</h3>
                <p className="text-white/80">{content.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Contenido */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-heading">{content.title}</h3>
            <p className="text-muted-foreground mb-8">{content.description}</p>

            {/* Características */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#B01E23]/10 flex items-center justify-center text-[#B01E23]">
                    {feature.icon}
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Planes */}
            <div className="space-y-4">
              {content.plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className={`border rounded-xl p-4 relative ${
                    plan.popular ? "border-[#B01E23] shadow-lg" : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 right-4 bg-[#B01E23] text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-3">
                      {plan.icon && (
                        <div className="w-10 h-10 rounded-full bg-[#B01E23]/10 flex items-center justify-center text-[#B01E23]">
                          {plan.icon}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-lg">{plan.name}</h4>
                        <p className="text-2xl font-bold text-[#B01E23]">{plan.price}</p>
                        {plan.subtitle && <p className="text-sm text-muted-foreground">{plan.subtitle}</p>}
                      </div>
                    </div>
                    <button className="text-[#B01E23] hover:text-[#8B0000] transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Información adicional para franquicias */}
            {activeTab === "franquicia" && (
              <div className="mt-8 space-y-6">
                {/* Filosofía */}
                <div className="bg-[#B01E23]/5 rounded-lg p-4">
                  <h4 className="font-bold text-[#B01E23] mb-2">🌟 Filosofía CaféClub:</h4>
                  <p className="text-sm italic">"{content.philosophy}"</p>
                </div>

                {/* Audiencia objetivo */}
                <div>
                  <h4 className="font-bold mb-3">🧭 ¿Quién puede ser franquiciado?</h4>
                  <ul className="space-y-2">
                    {content.targetAudience?.map((audience, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[#B01E23] flex-shrink-0 mt-1" />
                        <span className="text-sm">{audience}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Proceso */}
                <div>
                  <h4 className="font-bold mb-3">📲 ¿Cómo funciona?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "1. Eliges tu nivel de franquicia",
                      "2. Firmas tu contrato de representación",
                      "3. Recibes tu kit de activación",
                      "4. Comienzas tu operación local/nacional",
                      "5. Recibes apoyo mensual continuo",
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-[#B01E23] text-white text-xs flex items-center justify-center font-bold">
                          {idx + 1}
                        </div>
                        <span className="text-sm">{step.substring(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button variant="default" asChild className="bg-[#B01E23] hover:bg-[#8B0000] text-white">
                <a
                  href="https://wa.me/593978606269?text=Hola,%20me%20interesa%20saber%20más%20sobre%20las%20propuestas%20comerciales"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar información
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
