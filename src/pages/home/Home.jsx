import Hero from './Hero'
import Description from './Description'
import Cardbox from '../../components/ui/Cardbox'
import placeholderMeetings from '../../assets/placeholderPlaces.jpg'

const meetings = [
  { id: 1, title: 'Círculo de respiración consciente', date: '2026-05-03', location: 'Bosque de Chapultepec, CDMX', image: placeholderMeetings },
  { id: 2, title: 'Duelo y reconexión — grupo de apoyo', date: '2026-05-05', location: 'Casa Violeta, Coyoacán', image: placeholderMeetings },
  { id: 3, title: 'Caminata terapéutica al amanecer', date: '2026-05-09', location: 'Desierto de los Leones', image: placeholderMeetings },
  { id: 4, title: 'Meditación para ansiedad', date: '2026-05-12', location: 'En línea · Zoom', image: placeholderMeetings },
  { id: 5, title: 'Escritura terapéutica', date: '2026-05-15', location: 'Biblioteca Vasconcelos', image: placeholderMeetings },
]

const places = [
  { id: 1, title: 'Casa Violeta', location: 'Coyoacán, CDMX', image: placeholderMeetings },
  { id: 2, title: 'Refugio Nevado', location: 'Nevado de Toluca', image: placeholderMeetings },
  { id: 3, title: 'Temazcal de la Abuela', location: 'Tepoztlán, Morelos', image: placeholderMeetings },
  { id: 4, title: 'Jardín del Encuentro', location: 'Roma Norte, CDMX', image: placeholderMeetings },
  { id: 5, title: 'Playa Silencio', location: 'Bahía de Kino, Sonora', image: placeholderMeetings },
]

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Encuentra un círculo', body: 'Filtra por tema, cercanía o facilitador. Cada grupo describe a quién está dirigido y cómo opera.' },
    { n: '02', title: 'Reserva tu lugar', body: 'Los grupos son pequeños a propósito. Confirma con un click; recibirás los detalles del encuentro por correo.' },
    { n: '03', title: 'Asiste y conecta', body: 'Llega como eres. Después del encuentro puedes mantenerte en contacto con el grupo si lo deseas.' },
  ]
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14">
          <div className="text-xs uppercase tracking-[0.2em] text-gold-700 font-mono font-semibold mb-3">— Cómo funciona</div>
          <h2 className="font-display text-4xl md:text-5xl text-forest-900 tracking-tight leading-tight">
            Tres pasos para<br />
            <span className="italic font-light">encontrarte con otros.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-forest-700/15" />
          {steps.map((s, i) => (
            <div key={i} className="relative bg-cream-50 rounded-2xl p-7 border border-forest-700/10">
              <div className="relative w-16 h-16 rounded-full flex items-center justify-center font-display text-2xl mb-5 z-10 bg-forest-800 text-cream-100">
                {s.n}
              </div>
              <h3 className="font-display text-2xl text-forest-900 mb-3">{s.title}</h3>
              <p className="text-ink-700 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="pb-20 md:pb-28">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-cream-50 bg-forest-800">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="text-xs uppercase tracking-[0.25em] font-mono opacity-70 mb-4">— Empieza hoy</div>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02] tracking-tight">
                Tu primer círculo<br />
                <span className="italic font-light opacity-90">te está esperando.</span>
              </h2>
              <p className="mt-5 text-lg opacity-85 max-w-xl">Crea una cuenta gratis y recibe recomendaciones personalizadas según lo que estés atravesando.</p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3">
              <a href="/register" className="bg-cream-50 text-forest-900 px-6 py-4 rounded-full font-semibold hover:bg-gold-300 transition-colors inline-flex items-center justify-center gap-2">
                Crear mi cuenta
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </a>
              <a href="/meetings" className="text-cream-50 px-6 py-4 rounded-full font-medium border border-cream-50/30 hover:bg-cream-50/10 transition-colors text-center">
                Explorar sin cuenta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <div>
      <Hero />
      <Description />
      <Cardbox items={meetings} title="Próximas Reuniones" variant="meetings" />
      <Cardbox items={places} title="Lugares" variant="places" />
      <HowItWorks />
      <FinalCTA />
    </div>
  )
}

export default Home