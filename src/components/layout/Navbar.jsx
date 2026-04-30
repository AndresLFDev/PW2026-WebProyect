import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import logoImg from '../../assets/LogoMonoColor.png'
import { useState, useEffect } from 'react'

const links = [
  { to: '/meetings', label: 'Reuniones' },
  { to: '/groups', label: 'Grupos' },
  { to: '/places', label: 'Lugares' }
]

function Navbar() {
  const { user } = useAuth()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500
      ${scrolled ? 'bg-cream-50/85 backdrop-blur-md border-b border-forest-700/10' : 'bg-transparent'}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-4 flex items-center gap-8">
        <Link to="/" className="flex items-center gap-3">
          <div className='w-8 h-8 rounded-full bg-forest-700 flex items-center justify-center'>
            <img src={logoImg} alt="Logo" className="h-6 w-auto" />
          </div>
          <span className="font-display text-[1.35rem] tracking-tight text-forest-800">
            BIO<span className="text-gold-600">salud</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-[0.92rem] text-ink-700">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-3.5 py-2 rounded-full transition-colors 
                ${location.pathname === link.to ? 'text-forest-800 font-semibold' : 'text-ink-700 hover:text-forest-700 font-medium'}`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-gold-600"></span>
              )}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          {user ? (
            <Link to="/profile">
              <span className="text-sm font-semibold px-4 py-2.5 rounded-full bg-forest-800 text-cream-100 hover:bg-forest-700 transition-colors">Perfil</span>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <span className="hidden md:block text-sm text-forest-800 hover:text-forest-600 px-3 py-2 font-medium">Iniciar sesión</span>
              </Link>
              <Link to="/register">
                <span className="text-sm font-semibold px-4 py-2.5 rounded-full bg-forest-800 text-cream-100 hover:bg-forest-700 transition-all">Registrarse</span>
              </Link>
            </>
          )}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden w-8 h-8 rounded-full flex items-center justify-center text-forest-800"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" /></svg>
            {/*<span>☰</span>*/}
          </button>
        </div>
      </div>
      {open && (
        <div className="fixed inset-0 z-50 bg-forest-900/50 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
          <div className="absolute top-0 right-0 bg-cream-50 p-8 min-h-screen min-w-3/4">
            <div className="flex items-center justify-between">
              <span className='font-display text-xl text-forest-800'>Menú</span>
              <button onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
            <nav className='flex flex-col gap-1 mt-8'>
              {links.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 border-b border-forest-700/10 text-ink-900 text-lg"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
