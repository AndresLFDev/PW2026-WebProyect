import heroImg from '../../assets/hero-bg.png'

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">

      <div className="absolute inset-0 z-0">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/55 via-cream-50/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/20 via-transparent to-transparent" />
      </div>

    </section>
  )
}

export default Hero
