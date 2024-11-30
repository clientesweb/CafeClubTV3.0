import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 bg-[#8B0000] text-white rounded hover:bg-[#6B0000] focus:outline-none focus:ring-2 focus:ring-[#8B0000] focus:ring-opacity-50 transition-colors ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

