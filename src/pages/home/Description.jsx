function Description() {
  const pillars = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      ),
      title: 'Naturaleza como medicina',
      body: 'Cada encuentro ocurre en un entorno elegido con intención: bosque, jardín, playa, refugio.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: 'Grupos pequeños, por diseño',
      body: 'Entre 6 y 18 personas por círculo. Suficiente intimidad para que cada voz tenga espacio.',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
      ),
      title: 'Facilitación verificada',
      body: 'Terapeutas, psicólogos e instructores con formación comprobada. Nunca improvisación.',
    },
  ]

  return (
    <section id="nosotros" className="relative py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

        {/* Left */}
        <div className="md:col-span-5 md:sticky md:top-28">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-700 font-semibold mb-5 font-mono">— Por qué BIOsalud</div>
          <h2 className="font-display text-4xl md:text-5xl text-forest-900 leading-[1.05] tracking-tight">
            En un mundo acelerado,<br />
            <span className="italic font-light">la calma también</span><br />
            se practica en compañía.
          </h2>
          <p className="mt-6 text-lg text-ink-700 leading-relaxed">
            BIOsalud nació de una observación simple: sanar en soledad es posible, pero sanar juntos es más profundo. Creamos puentes entre personas, facilitadores y espacios que hacen del bienestar algo tangible y sostenido.
          </p>
        </div>

        {/* Right */}
        <div className="md:col-span-7 md:col-start-7 flex flex-col gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="group relative bg-cream-50 border border-forest-700/10 rounded-2xl p-7 hover:border-forest-700/30 transition-colors">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-forest-700/10 text-forest-700">
                  {p.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="font-mono text-xs text-ink-500">0{i + 1}</span>
                    <h3 className="font-display text-2xl text-forest-900">{p.title}</h3>
                  </div>
                  <p className="text-ink-700 leading-relaxed">{p.body}</p>
                </div>
              </div>
            </div>
          ))}

          <figure className="mt-4 p-7 rounded-2xl bg-forest-700/5 border border-forest-700/10">
            <blockquote className="font-display text-2xl md:text-[1.7rem] italic text-forest-900 leading-snug">
              "La salud mental no se resuelve en solitario. Se construye en red, con otros cuerpos presentes, con otros relatos."
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 text-sm">
              <div className="w-10 h-10 rounded-full bg-gold-300"
                style={{ backgroundImage: 'repeating-linear-gradient(135deg, rgba(40,70,54,.07) 0 8px, rgba(40,70,54,0) 8px 16px)' }} />
              <div>
                <div className="font-semibold text-forest-900">Dra. Valeria Escobedo</div>
                <div className="text-ink-500">Miembro del consejo clínico</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Description