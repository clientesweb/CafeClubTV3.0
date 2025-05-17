"use client"

import Link from "next/link"
import AmelieChat from "./AmelieChat"

export default function FloatingChat() {
  return (
    <div id="floating-chat" className="fixed right-4 bottom-24 flex flex-col gap-2 items-end z-40">
      {/* Amelie Chat se coloca antes del botón de WhatsApp */}
      <AmelieChat />

      <Link
        href="https://wa.me/593978606269"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 flex items-center justify-center w-14 h-14 transition-colors duration-300 shadow-lg"
      >
        <i className="fab fa-whatsapp text-xl"></i>
        <span className="sr-only">Chat en WhatsApp</span>
      </Link>
    </div>
  )
}
