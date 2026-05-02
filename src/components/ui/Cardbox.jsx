import placeholderImg from '../../assets/placeholderPlaces.jpg'

function MeetingCard({ item, featured = false }) {
  const formatDate = (iso) => {
    if (!iso) return { day: '—', month: '—', wd: '—' }
    const d = new Date(iso + 'T00:00:00')
    const day = d.getDate()
    const month = d.toLocaleDateString('es-MX', { month: 'short' }).replace('.', '').toUpperCase()
    const wd = d.toLocaleDateString('es-MX', { weekday: 'long' })
    return { day, month, wd }
  }
  const { day, month } = formatDate(item.date)

  if (featured) {
    return (
      <article className="group relative md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden bg-forest-800 text-cream-100 min-h-[480px] flex flex-col justify-end p-7 cursor-pointer">
        <img src={item.image || placeholderImg} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt={item.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-900/60 to-transparent" />
        <div className="relative">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-semibold text-gold-300 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-300" /> Destacado de la semana
          </div>
          <div className="text-xs font-mono text-cream-100/70 mb-2">{item.date}</div>
          <h3 className="font-display text-3xl md:text-4xl leading-[1.05] mb-3 max-w-md">{item.title}</h3>
          <div className="flex items-center gap-4 text-sm text-cream-100/80 mb-5">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              {item.location}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[11, 12, 13, 14].map(i => <img key={i} src={`https://i.pravatar.cc/40?img=${i}`} className="w-8 h-8 rounded-full border-2 border-forest-800" alt="" />)}
            </div>
            <button className="ml-auto bg-cream-50 text-forest-900 px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-gold-300 transition-colors">
              Reservar
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className="group relative bg-cream-50 border border-forest-700/10 rounded-2xl overflow-hidden hover:border-forest-700/30 hover:shadow-lg hover:shadow-forest-900/5 transition-all cursor-pointer">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={item.image || placeholderImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
        <div className="absolute top-3 left-3 bg-cream-50 rounded-xl px-3 py-2 text-center shadow-sm">
          <div className="font-display text-2xl leading-none text-forest-900">{day}</div>
          <div className="font-mono text-[10px] text-ink-500 tracking-wider">{month}</div>
        </div>
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-cream-50/90 backdrop-blur flex items-center justify-center text-ink-500 hover:text-red-400 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>

      <div className="p-5">
        <h3 className="font-display text-xl text-forest-900 leading-tight mb-2 group-hover:text-forest-700 transition-colors">{item.title}</h3>
        <div className="flex items-center gap-3 text-xs text-ink-500 mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            {item.date}
          </span>
          <span className="w-1 h-1 rounded-full bg-ink-300" />
          <span className="flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {item.location}
          </span>
        </div>
        <div className="flex items-center justify-end">
          <a href="#" className="text-xs text-forest-700 hover:text-forest-900 font-medium flex items-center gap-1 hover:gap-2 transition-all">
            Ver más
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>
      </div>
    </article>
  )
}

function PlaceCard({ item }) {
  return (
    <article className="group relative rounded-2xl overflow-hidden bg-cream-50 border border-forest-700/10 hover:border-forest-700/30 transition-all cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={item.image || placeholderImg} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-forest-950/20 to-transparent" />
        <div className="absolute inset-x-4 bottom-4 text-cream-50">
          <h3 className="font-display text-2xl leading-tight">{item.title}</h3>
          <div className="text-xs opacity-80 flex items-center gap-1 mt-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
            {item.location}
          </div>
        </div>
      </div>
    </article>
  )
}

function Cardbox({ items, title, variant = 'meetings' }) {
  const isMeetings = variant === 'meetings'
  return (
    <section className="py-20 md:py-28 bg-cream-100/50">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold-700 font-mono font-semibold mb-3">
              {isMeetings ? '— Agenda comunitaria' : '— Lugares aliados'}
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-forest-900 leading-tight tracking-tight">
              {isMeetings ? <>Próximos círculos<br /><span className="italic font-light">abiertos esta semana</span></> : <>Espacios elegidos<br /><span className="italic font-light">para cuidarse.</span></>}
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-forest-800 font-medium hover:gap-3 transition-all">
            {isMeetings ? 'Ver todas las reuniones' : 'Ver todos los lugares'}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </div>

        {isMeetings ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 auto-rows-fr">
            {items.slice(0, 1).map(m => <MeetingCard key={m.id} item={m} featured />)}
            {items.slice(1, 5).map(m => <MeetingCard key={m.id} item={m} />)}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {items.map(p => <PlaceCard key={p.id} item={p} />)}
          </div>
        )}
      </div>
    </section>
  )
}

export default Cardbox