export default function TopBanner() {
  return (
    <div className="bg-[var(--primary-color)] text-white text-center py-3 px-6 sm:py-4 sm:px-8">
      <p className="text-sm sm:text-base font-semibold">
        ¿Te sientes con suerte? ¡Premiamos tu fidelidad con nuestra Ruleta!
        <a 
          href="#" 
          className="inline-block bg-yellow-500 text-black px-4 py-2 mt-2 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-yellow-400 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          aria-label="Gira gratis la ruleta"
        >
          Gira Gratis
        </a>
      </p>
    </div>
  )
}