import heroImg from '../../assets/hero-bg.png'
import { Link } from 'react-router-dom'

function StatPair({ big, small, icon }) {
  return (
    <div>
      <div className="font-display text-2xl md:text-3xl text-forest-900 flex items-center gap-1.5">
        {big} {icon}
      </div>
      <div className="text-xs text-ink-500 mt-0.5">{small}</div>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50/70 via-cream-50/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 via-transparent to-transparent" />
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-10 pt-32 pb-20 md:pt-40 md:pb-28 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        <div className="md:col-span-7 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream-50/80 backdrop-blur border border-forest-700/15 text-xs text-forest-800 font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-600 animate-pulse" />
            Próximo encuentro en 2 días · Bosque de Chapultepec
          </div>

          <h1 className="font-display text-[2.8rem] md:text-[5rem] leading-[1.02] text-forest-900 tracking-tight drop-shadow-sm">
            Encuentra tu<br />
            <span className="italic font-light text-forest-700">espacio</span> de sanación<br />
            <span style={{ backgroundImage: 'linear-gradient(transparent 62%, rgba(169,148,95,.35) 62%)', padding: '0 .1em' }}>
              colectiva.
            </span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-ink-700 leading-relaxed max-w-xl">
            BIOsalud conecta a personas que buscan reconectar consigo mismas a través de círculos guiados, caminatas, meditación y grupos de apoyo en espacios naturales cuidadosamente elegidos.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/meetings" className="group inline-flex items-center gap-3 bg-forest-800 text-cream-100 px-6 py-4 rounded-full font-medium hover:bg-forest-700 transition-colors shadow-lg shadow-forest-900/20">
              Ver próximos círculos
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <button className="inline-flex items-center gap-2 text-forest-800 px-5 py-4 rounded-full border border-forest-800/30 bg-cream-50/60 backdrop-blur hover:bg-cream-50 transition-colors font-medium">
              Explorar lugares
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 md:gap-10">
            <StatPair big="1,400+" small="miembros activos" />
            <div className="w-px h-10 bg-forest-700/20" />
            <StatPair big="47" small="círculos este mes" />
            <div className="w-px h-10 bg-forest-700/20" />
            <StatPair big="4.9" small="valoración promedio"
              icon={<svg className="w-4 h-4 text-gold-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>}
            />
          </div>
        </div>

        <div className="md:col-span-5 relative hidden md:block">
          <div className="relative min-h-[420px]">
            <div className="absolute right-0 top-0 bg-cream-50/95 backdrop-blur border border-forest-700/10 rounded-2xl shadow-2xl shadow-forest-900/15 p-4 w-[280px] animate-float">
              <div className="text-[10px] uppercase tracking-widest text-gold-700 font-semibold mb-1.5">Próximo círculo</div>
              <div className="font-display text-lg text-forest-900 leading-tight">Respiración consciente al amanecer</div>
              <div className="mt-3 flex items-center gap-3 text-xs text-ink-700">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  Dom · 8:00
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Chapultepec
                </span>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[11, 12, 13].map(i => <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} className="w-6 h-6 rounded-full border-2 border-cream-50" alt="" />)}
                </div>
                <span className="text-[11px] text-ink-500">+9 asistentes</span>
              </div>
            </div>

            <div className="absolute right-6 bottom-4 bg-cream-50/95 backdrop-blur border border-forest-700/10 rounded-2xl shadow-2xl shadow-forest-900/15 px-4 py-3 flex items-center gap-3 w-[240px] animate-float-delayed">
              <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gold-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
              </div>
              <div className="text-xs">
                <div className="font-semibold text-forest-900">132 facilitadoras</div>
                <div className="text-ink-500">verificadas en la red</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-forest-800/70 text-xs font-mono uppercase tracking-widest">
        <span>Desliza</span>
        <div className="w-px h-8 bg-forest-800/40 animate-pulse" />
      </div>
    </section>
  )
}

export default Hero