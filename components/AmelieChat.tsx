"use client"

import { useState, useEffect, useRef } from "react"
import { X, MessageSquare } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function AmelieChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  // Cargar el iframe solo cuando se abre el chat para mejorar el rendimiento
  useEffect(() => {
    if (isOpen && !isLoaded) {
      setIsLoaded(true)
    }
  }, [isOpen, isLoaded])

  // Función para alternar la visibilidad del chat
  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="fixed right-4 bottom-36 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="mb-4 bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 relative"
            style={{ width: "350px", maxWidth: "calc(100vw - 32px)" }}
          >
            {/* Barra superior del chat */}
            <div className="bg-[#B01E23] text-white p-3 flex justify-between items-center">
              <h3 className="font-medium text-sm">Amelie: Asistente CaféClub® TV</h3>
              <button
                onClick={toggleChat}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Cerrar chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Contenedor del iframe */}
            <div className="w-full h-[450px]">
              {isLoaded && (
                <iframe
                  ref={iframeRef}
                  id="JotFormIFrame-01965efb7bc0707ebca0c098d33c6675a792"
                  title="Amelie: Asistente CaféClub® TV"
                  allowTransparency={true}
                  allow="geolocation; microphone; camera; fullscreen"
                  src="https://agent.jotform.com/01965efb7bc0707ebca0c098d33c6675a792/voice?embedMode=iframe&background=1&shadow=1"
                  frameBorder="0"
                  style={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    height: "450px",
                    border: "none",
                    width: "100%",
                  }}
                  scrolling="no"
                ></iframe>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón para abrir el chat */}
      <motion.button
        onClick={toggleChat}
        className={`flex items-center justify-center p-3 rounded-full shadow-lg transition-colors duration-300 ${
          isOpen ? "bg-gray-700 text-white hover:bg-gray-800" : "bg-[#B01E23] text-white hover:bg-[#8B0000]"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Cerrar chat con Amelie" : "Abrir chat con Amelie"}
      >
        <MessageSquare className="h-6 w-6" />
      </motion.button>

      {/* Script para JotForm */}
      {isLoaded && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                const script = document.createElement('script');
                script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
                script.async = true;
                document.body.appendChild(script);
                
                script.onload = function() {
                  if (window.jotformEmbedHandler) {
                    window.jotformEmbedHandler("iframe[id='JotFormIFrame-01965efb7bc0707ebca0c098d33c6675a792']", "https://www.jotform.com");
                  }
                };
              }
            `,
          }}
        />
      )}
    </div>
  )
}
