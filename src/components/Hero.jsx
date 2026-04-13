import heroImg from '../assets/hero-bg.png'

function Hero() {
  return (
    <section id="hero" class="relative min-h-screen flex items-center px-10 text-amber-50">
      <div class="absolute inset-0 -z-10">
        <img src="src/assets/hero-bg.png" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/15 to-black/60"></div>
      </div>
      <div class="max-w-2xl flex flex-col gap-5">
        <h1 class="text-5xl md:text-6xl font-bold leading-tight drop-shadow-2xl">
          Encuentra tu espacio de sanación
        </h1>
        <p class="text-lg md:text-2xl text-amber-50/90 drop-shadow-lg">
          Conecta con la naturaleza y contigo mismo
        </p>
        <button class="bg-[#A9945F] text-[#1e382a] w-fit px-6 py-3 mt-4 rounded-full font-semibold
                        hover:bg-[#1e382a] hover:text-[#A9945F] hover:scale-105
                        transition-all duration-300 shadow-lg">
          Conócenos
        </button>
      </div>
    </section>
  )
}

export default Hero