"use client"

import Link from "next/link"
import Image from "next/image"
import AmelieChat from "./AmelieChat"

export default function FloatingChat() {
  return (
    <div id="floating-chat" className="fixed right-4 bottom-24 flex flex-col gap-2 items-end z-40">
      {/* Amelie Chat se coloca antes del botón de SCAN */}
      <AmelieChat />

      <div className="relative">
        {/* Notification bubble */}
        <div className="absolute -top-2 -left-20 bg-[#8B4513] text-white text-xs px-2 py-1 rounded-lg shadow-lg whitespace-nowrap">
          Scanea tu café
          <div className="absolute top-2 right-0 w-0 h-0 border-l-4 border-l-[#8B4513] border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
        </div>

        <Link
          href="https://form.jotform.com/251117055333043"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-full p-2 flex items-center justify-center w-14 h-14 transition-colors duration-300 shadow-lg border-2 border-[#D2691E]"
        >
          <Image src="/cafeclub-scan-logo.jpg" alt="CaféClub SCAN" width={32} height={32} className="rounded-full" />
          <span className="sr-only">Scanea tu café</span>
        </Link>
      </div>
    </div>
  )
}
