import logoImg from '../../assets/LogoMonoColor.png'

const cols = [
  {
    title: 'Explorar',
    links: ['Reuniones esta semana', 'Lugares aliados', 'Grupos permanentes', 'Calendario'],
  },
  {
    title: 'Comunidad',
    links: ['Sobre BIOsalud', 'Fundadoras', 'Historias', 'Prensa'],
  },
  {
    title: 'Para facilitadores',
    links: ['Ofrecer un círculo', 'Registrar un lugar', 'Código de ética', 'Formación'],
  },
  {
    title: 'Ayuda',
    links: ['Preguntas frecuentes', 'Privacidad', 'Seguridad en grupo', 'Contacto'],
  },
]

function Footer() {
  return (
    <footer className="bg-forest-900 text-cream-100 pt-20 pb-10 mt-14">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">

        {/* Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-cream-100/10">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-full bg-forest-700 flex items-center justify-center overflow-hidden">
                <img src={logoImg} className="w-6 h-6 object-contain" alt="logo" />
              </div>
              <span className="font-display text-2xl">BIO<span className="text-gold-500">salud</span></span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl leading-tight mb-3 max-w-md">
              Una carta mensual<br />
              <span className="italic font-light text-gold-300">desde el bosque.</span>
            </h3>
            <p className="text-cream-100/70 max-w-md">Reflexiones, prácticas breves y el calendario del mes. Sin spam, sin publicidad.</p>
          </div>

          <div className="md:col-span-6 md:self-end">
            <form className="flex flex-col sm:flex-row gap-2 max-w-md md:ml-auto">
              <input
                type="email"
                placeholder="tu@correo.com"
                className="flex-1 bg-cream-100/5 border border-cream-100/15 rounded-full px-5 py-3.5 text-cream-100 placeholder-cream-100/40 outline-none focus:border-gold-500 transition-colors"
              />
              <button className="px-6 py-3.5 rounded-full font-semibold bg-gold-600 text-forest-900 hover:bg-gold-500 transition-colors whitespace-nowrap">
                Suscribirme
              </button>
            </form>
            <p className="text-xs text-cream-100/50 mt-3 md:text-right">2,800 personas leen BIOsalud cada primer domingo del mes.</p>
          </div>
        </div>

        {/* Columnas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-14">
          {cols.map(c => (
            <div key={c.title}>
              <h4 className="text-xs uppercase tracking-widest font-mono text-gold-500 mb-5">{c.title}</h4>
              <ul className="flex flex-col gap-3 text-sm">
                {c.links.map(l => (
                  <li key={l}><a href="#" className="text-cream-100/75 hover:text-cream-100 transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-10 border-t border-cream-100/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-cream-100/50">
          <div>© 2026 BIOsalud. Una red colectiva. Hecho en México con cuidado.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-cream-100 transition-colors">Términos</a>
            <a href="#" className="hover:text-cream-100 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-cream-100 transition-colors">Cookies</a>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Todos los sistemas operativos
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer
