import heroImg from '../../assets/hero-bg.png'

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center px-10 text-amber-50">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/15 to-black/60"></div> {/* eslint-disable-line */}
      </div>
      <div className="max-w-2xl flex flex-col gap-5">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-2xl">
          Encuentra tu espacio de sanación
        </h1>
        <p className="text-lg md:text-2xl text-amber-50/90 drop-shadow-lg">
          Conecta con la naturaleza y contigo mismo
        </p>
        <button className="bg-[#A9945F] text-forest-800 w-fit px-6 py-3 mt-4 rounded-full font-semibold
                        hover:bg-forest-800 hover:text-[#A9945F] hover:scale-105
                        transition-all duration-300 shadow-lg">
          Conócenos
        </button>
      </div>
    </section>
  )
}

export default Hero
