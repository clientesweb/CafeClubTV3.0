"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, ArrowRight, Tv, Globe, Video, Users, Star, Zap } from "lucide-react"

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
      description: "Lleva nuestra marca a tu país o región y desarrolla un negocio de medios exitoso.",
      features: [
        { icon: <Globe className="w-5 h-5" />, text: "Exclusividad territorial" },
        { icon: <Tv className="w-5 h-5" />, text: "Contenido personalizado" },
        { icon: <Zap className="w-5 h-5" />, text: "Tecnología propietaria" },
        { icon: <Star className="w-5 h-5" />, text: "Modelo de negocio probado" },
      ],
      plans: [
        {
          name: "Regional",
          price: "Desde $9,999",
          features: [
            "Exclusividad en una región",
            "Plataforma personalizada",
            "Capacitación inicial",
            "Soporte técnico",
            "Contenido compartido",
          ],
          popular: false,
        },
        {
          name: "Nacional",
          price: "Desde $24,999",
          features: [
            "Exclusividad nacional",
            "Plataforma completa",
            "Capacitación continua",
            "Soporte premium",
            "Contenido exclusivo",
            "Marketing territorial",
          ],
          popular: true,
        },
        {
          name: "Master",
          price: "Consultar",
          features: [
            "Derechos multinacionales",
            "Plataforma avanzada",
            "Capacitación ejecutiva",
            "Soporte dedicado 24/7",
            "Producción de contenido",
            "Estrategia de expansión",
          ],
          popular: false,
        },
      ],
      image: "/images/hero3.png",
    },
  }

  const content = tabContent[activeTab as keyof typeof tabContent]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Propuestas Comerciales</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                    ? "bg-[var(--primary-color)] text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                <h3 className="text-white text-2xl font-bold">{content.title}</h3>
                <p className="text-white/80">{content.description}</p>
              </div>
            </div>
          </motion.div>

          {/* Contenido */}
          <div>
            <h3 className="text-2xl font-bold mb-6">{content.title}</h3>
            <p className="text-gray-600 mb-8">{content.description}</p>

            {/* Características */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center text-[var(--primary-color)]">
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
                    plan.popular ? "border-[var(--primary-color)] shadow-lg" : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 right-4 bg-[var(--primary-color)] text-white text-xs px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-bold text-lg">{plan.name}</h4>
                      <p className="text-2xl font-bold text-[var(--primary-color)]">{plan.price}</p>
                    </div>
                    <button className="text-[var(--primary-color)] hover:text-[var(--secondary-color)] transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <a
                href="https://wa.me/593978606269?text=Hola,%20me%20interesa%20saber%20más%20sobre%20las%20propuestas%20comerciales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-[var(--primary-color)] hover:bg-[var(--secondary-color)] text-white font-bold rounded-lg transition-all duration-300 ease-in-out"
              >
                Solicitar información
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

