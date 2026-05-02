import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import MeetingModal from '../components/ui/MeetingModal'
import profilePicture from '../assets/perfil.png'
import heroBg from '../assets/hero-bg.png'
import placeholderPlaces from '../assets/placeholderPlaces.jpg'

const USER = {
  name: 'Juan', lastName: 'Pérez', handle: '@juanp',
  city: 'Ciudad de México', memberSince: 'Marzo 2025',
  img: profilePicture,
  bio: 'Aprendiendo a escuchar en silencio. Llegué a BIOsalud buscando un grupo de duelo; me quedé por la comunidad.',
  stats: { circulos: 23, lugares: 8, companeros: 47, racha: 6, horas: 64 },
}

const COMPANIONS = [
  { id: 1, img: 'https://i.pravatar.cc/80?img=11', name: 'Ana Torres', online: true, shared: 5 },
  { id: 2, img: 'https://i.pravatar.cc/80?img=12', name: 'Luis Méndez', online: false, shared: 3 },
  { id: 3, img: 'https://i.pravatar.cc/80?img=13', name: 'Sofía Ruiz', online: true, shared: 8 },
  { id: 4, img: 'https://i.pravatar.cc/80?img=33', name: 'Daniel Orozco', online: false, shared: 2 },
  { id: 5, img: 'https://i.pravatar.cc/80?img=22', name: 'María López', online: true, shared: 4 },
]

const SAVED_MEETINGS = [
  { id: 'm1', title: 'Círculo de respiración consciente', date: '3 Mayo', time: '08:00', location: 'Bosque de Chapultepec', status: 'próxima' },
  { id: 'm2', title: 'Duelo y reconexión', date: '5 Mayo', time: '18:30', location: 'Casa Violeta, Coyoacán', status: 'próxima' },
  { id: 'm3', title: 'Escritura terapéutica', date: '15 Abr', time: '17:00', location: 'Biblioteca Vasconcelos', status: 'asistida' },
  { id: 'm4', title: 'Yoga restaurativo + té', date: '10 Abr', time: '10:00', location: 'Jardín Etnobotánico', status: 'asistida' },
]

const SAVED_PLACES = [
  { id: 'p1', title: 'Casa Violeta', location: 'Coyoacán', visits: 4 },
  { id: 'p2', title: 'Refugio Nevado', location: 'Nevado de Toluca', visits: 1 },
  { id: 'p3', title: 'Temazcal de la Abuela', location: 'Tepoztlán', visits: 2 },
  { id: 'p4', title: 'Jardín del Encuentro', location: 'Roma Norte', visits: 6 },
]

const GROUPS = [
  { id: 'g1', name: 'Lunes de silencio', members: 14, cadence: 'Semanal · Lunes 7am', tag: 'Meditación' },
  { id: 'g2', name: 'Círculo de duelo — CDMX', members: 10, cadence: 'Quincenal · Jueves 19h', tag: 'Apoyo emocional' },
  { id: 'g3', name: 'Caminantes del amanecer', members: 28, cadence: 'Mensual · Sábados', tag: 'Naturaleza' },
]

function StatPill({ big, label }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-3xl md:text-4xl text-forest-900 tracking-tight">{big}</span>
      <div className="text-xs text-ink-500 uppercase tracking-wider font-mono">{label}</div>
    </div>
  )
}

function Profile() {
  const { logout } = useAuth()
  const [showMeetingModal, setShowMeetingModal] = useState(false)
  const [activeTab, setActiveTab] = useState('reuniones')
  const tabs = [
    { id: 'reuniones', label: 'Reuniones', count: SAVED_MEETINGS.length },
    { id: 'lugares', label: 'Mis lugares', count: SAVED_PLACES.length },
    { id: 'grupos', label: 'Grupos', count: GROUPS.length },
  ]

  return (
    <div className="min-h-screen bg-cream-100/40">

      {/* Banner + header */}
      <div className="relative w-full pt-20">
        <div className="relative h-56 md:h-72 overflow-hidden bg-forest-800">
          <img src={heroBg} className="absolute inset-0 w-full h-full object-cover opacity-60" alt="" />
          <div className="absolute inset-0 bg-gradient-to-br from-forest-950/60 via-forest-900/30 to-forest-800/20" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,248,225,0.7) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="relative max-w-[1180px] mx-auto h-full px-6 md:px-10 flex flex-col justify-end pb-8">
            <div className="text-xs uppercase tracking-[0.2em] font-mono text-gold-300 mb-2">— Mi espacio</div>
            <span className="font-display italic text-cream-100/80 text-lg">Bienvenido de vuelta,</span>
          </div>
          <button className="absolute top-5 right-6 md:right-10 flex items-center gap-2 bg-cream-50/15 backdrop-blur border border-cream-50/25 text-cream-50 px-4 py-2 rounded-full text-xs font-medium hover:bg-cream-50/25 transition-colors">
            Cambiar portada
          </button>
        </div>

        <div className="max-w-[1180px] mx-auto px-6 md:px-10">
          <div className="relative -mt-16 md:-mt-20 flex flex-col md:flex-row md:items-end gap-6 md:gap-8 pb-8 border-b border-forest-700/10">
            <div className="relative shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-cream-50 shadow-xl overflow-hidden bg-gold-300">
                <img src={USER.img} alt={USER.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="font-display text-4xl md:text-5xl text-forest-900 tracking-tight">{USER.name} {USER.lastName}</h1>
                <span className="text-xs font-mono text-forest-700 bg-forest-700/10 px-2 py-0.5 rounded-full">verificado</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-500">
                <span className="font-mono">{USER.handle}</span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  {USER.city}
                </span>
                <span className="flex items-center gap-1 text-forest-700 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-600" />
                  Racha de {USER.stats.racha} semanas
                </span>
              </div>
            </div>
            <div className="flex gap-2 md:self-end md:pb-1 shrink-0">
              <button className="px-5 py-2.5 rounded-full border border-forest-700/20 text-forest-800 text-sm font-medium hover:bg-forest-700/5 transition-colors">Compartir</button>
              <button className="px-5 py-2.5 rounded-full bg-forest-800 text-cream-100 text-sm font-semibold hover:bg-forest-700 transition-colors">Editar perfil</button>
            </div>
          </div>

          {/* Bio + stats */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7">
              <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-gold-700 mb-2">— Sobre mí</div>
              <p className="font-display text-xl md:text-2xl italic text-forest-900 leading-snug max-w-2xl">"{USER.bio}"</p>
            </div>
            <div className="md:col-span-5 grid grid-cols-4 gap-4 md:gap-6">
              <StatPill big={USER.stats.circulos} label="círculos" />
              <StatPill big={USER.stats.companeros} label="compañeros" />
              <StatPill big={USER.stats.lugares} label="lugares" />
              <StatPill big={USER.stats.horas + 'h'} label="en comunidad" />
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1180px] mx-auto px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-12 gap-8">

        {/* Sidebar */}
        <aside className="md:col-span-4 lg:col-span-3 flex flex-col gap-5">
          {/* Racha */}
          <div className="relative rounded-2xl p-5 overflow-hidden text-cream-100 bg-forest-800">
            <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)', backgroundSize: '14px 14px' }} />
            <div className="relative">
              <div className="text-[10px] uppercase tracking-widest font-mono opacity-70 mb-2">Racha actual</div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-5xl tracking-tight">{USER.stats.racha}</span>
                <span className="font-display text-xl italic opacity-85">semanas</span>
              </div>
              <p className="text-xs opacity-80 mt-2 leading-snug">Sigue así. La próxima reunión es el <span className="font-semibold underline decoration-dotted">domingo 3 de mayo</span>.</p>
              <div className="mt-4 flex gap-1.5">
                {[1,1,1,1,1,1,0].map((v, i) => (
                  <div key={i} className={`h-2 flex-1 rounded-full ${v ? 'bg-cream-50' : 'bg-cream-50/25'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Quick actions */}
          <div className="bg-cream-50 border border-forest-700/10 rounded-2xl p-4">
            <div className="text-[10px] uppercase tracking-widest font-mono text-ink-500 mb-3 px-1">Acciones rápidas</div>
            <div className="flex flex-col gap-2">
              <button onClick={() => setShowMeetingModal(true)} className="flex items-center gap-2 w-full px-4 py-2.5 rounded-full border text-sm font-medium bg-forest-800 text-cream-100 border-forest-800 hover:bg-forest-700 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                Crear una reunión
              </button>
              {[
                { label: 'Crear un grupo', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
                { label: 'Recomendar un lugar', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg> },
                { label: 'Invitar compañeros', icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg> },
              ].map(({ label, icon }) => (
                <button key={label} className="flex items-center gap-2 w-full px-4 py-2.5 rounded-full border text-sm font-medium bg-transparent text-forest-800 border-forest-700/20 hover:bg-forest-700/5 transition-colors">
                  {icon} {label}
                </button>
              ))}
            </div>
          </div>

          {/* Companions */}
          <div className="bg-cream-50 border border-forest-700/10 rounded-2xl p-4">
            <div className="flex items-center justify-between mb-3 px-1">
              <div className="text-[10px] uppercase tracking-widest font-mono text-ink-500">Compañeros</div>
              <span className="text-[10px] font-mono text-forest-700">{COMPANIONS.length}+</span>
            </div>
            <div className="flex flex-col gap-1">
              {COMPANIONS.map(c => (
                <button key={c.id} className="flex items-center gap-3 p-2 rounded-xl hover:bg-forest-700/5 transition-colors text-left">
                  <div className="relative">
                    <img src={c.img} className="w-10 h-10 rounded-full object-cover" alt={c.name} />
                    {c.online && <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-500 border-2 border-cream-50" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-forest-900 truncate">{c.name}</div>
                    <div className="text-[11px] text-ink-500">{c.shared} círculos juntos</div>
                  </div>
                </button>
              ))}
            </div>
            <button onClick={() => { logout(); window.location.href = '/login' }} className="mt-4 w-full text-center text-xs text-red-400 hover:text-red-600 font-medium pt-3 border-t border-forest-700/10 flex items-center justify-center gap-2">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1"/></svg>
              Cerrar sesión
            </button>
          </div>
        </aside>

        {/* Main tabs */}
        <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-8">
          <section className="bg-cream-50 border border-forest-700/10 rounded-2xl overflow-hidden">
            <div className="flex items-center border-b border-forest-700/10 px-2 pt-2 gap-1">
              {tabs.map(t => (
                <button key={t.id} onClick={() => setActiveTab(t.id)}
                  className={`relative px-5 py-3.5 text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === t.id ? 'text-forest-900' : 'text-ink-500 hover:text-forest-700'}`}>
                  {t.label}
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${activeTab === t.id ? 'bg-forest-700/10 text-forest-700' : 'bg-ink-300/20 text-ink-500'}`}>{t.count}</span>
                  {activeTab === t.id && <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-forest-800" />}
                </button>
              ))}
            </div>
            <div className="p-5 md:p-6">
              {activeTab === 'reuniones' && (
                <div className="flex flex-col gap-7">
                  {[{ label: 'Próximas', items: SAVED_MEETINGS.filter(m => m.status === 'próxima') }, { label: 'Historial', items: SAVED_MEETINGS.filter(m => m.status === 'asistida') }].map(({ label, items }) => (
                    <div key={label}>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs uppercase tracking-widest font-mono text-forest-700">{label} · {items.length}</span>
                        <div className="flex-1 h-px bg-forest-700/10" />
                      </div>
                      {items.map(m => (
                        <div key={m.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-forest-700/5 transition-colors cursor-pointer group mb-2">
                          <div className="w-14 text-center py-2 px-2 rounded-lg bg-forest-700/5 border border-forest-700/10">
                            <div className="text-[9px] font-mono text-ink-500 uppercase tracking-wider">{m.date.split(' ')[1]}</div>
                            <div className="font-display text-xl leading-none text-forest-900">{m.date.split(' ')[0]}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-forest-900">{m.title}</div>
                            <div className="text-xs text-ink-500 flex items-center gap-3 mt-0.5">
                              <span>{m.time}</span>
                              <span>{m.location}</span>
                            </div>
                          </div>
                          {m.status === 'próxima' && <span className="text-[10px] uppercase tracking-wider font-mono text-forest-700 bg-forest-700/5 px-2 py-1 rounded-full">Confirmada</span>}
                          {m.status === 'asistida' && <button className="text-xs text-forest-700 hover:underline">Dejar reseña</button>}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              {activeTab === 'lugares' && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {SAVED_PLACES.map(p => (
                    <div key={p.id} className="group rounded-xl overflow-hidden border border-forest-700/10 hover:border-forest-700/30 transition-colors cursor-pointer">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={placeholderPlaces} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={p.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/60 to-transparent" />
                        <span className="absolute top-2 right-2 bg-cream-50/95 text-[10px] font-mono text-forest-900 px-2 py-1 rounded-full">{p.visits} visitas</span>
                        <div className="absolute bottom-2 left-2 right-2 text-cream-50">
                          <div className="font-display text-lg leading-tight">{p.title}</div>
                          <div className="text-[11px] flex items-center gap-1 opacity-80">{p.location}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button className="rounded-xl border-2 border-dashed border-forest-700/15 flex flex-col items-center justify-center gap-2 text-ink-500 hover:border-forest-700/40 hover:text-forest-700 transition-colors aspect-[4/3]">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                    <span className="text-xs font-medium">Agregar lugar</span>
                  </button>
                </div>
              )}
              {activeTab === 'grupos' && (
                <div className="flex flex-col gap-3">
                  {GROUPS.map(g => (
                    <div key={g.id} className="flex items-center gap-4 p-4 rounded-xl border border-forest-700/10 hover:border-forest-700/30 transition-colors cursor-pointer">
                      <div className="w-12 h-12 rounded-xl bg-forest-700/10 flex items-center justify-center text-forest-700">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-display text-lg text-forest-900">{g.name}</span>
                          <span className="text-[10px] uppercase tracking-wider font-mono text-gold-700 bg-gold-100 px-2 py-0.5 rounded-full">{g.tag}</span>
                        </div>
                        <div className="text-xs text-ink-500 mt-0.5">{g.members} miembros · {g.cadence}</div>
                      </div>
                      <button className="text-xs text-forest-700 hover:underline font-medium">Abrir grupo →</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {showMeetingModal && <MeetingModal onClose={() => setShowMeetingModal(false)} onCreated={() => console.log('Reunión creada')} />}
    </div>
  )
}

export default Profile