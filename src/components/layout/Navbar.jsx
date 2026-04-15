import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

function Navbar() {
  const { user } = useAuth()

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex py-2 px-4 items-center gap-10 bg-[#284636]">
      <Link to="/">
        <div id="logotipo" className="flex flex-row items-center gap-2.5 text-[#A9945F] font-bold">
          <img src="./src/assets/LogoMonoColor.png" alt="Logo de la Pagina" width="50px" height="50px" />
          <span>BIOsalud</span>
        </div>
      </Link>
      <div className="w-full flex justify-end text-amber-50">
        <ul className="flex flex-row items-center gap-3">
          <Link to="/meetings" className="hover:text-[#A9945F] transition-all duration-300">Reuniones</Link>
          <Link to="/groups" className="hover:text-[#A9945F] transition-all duration-300">Grupos</Link>
          <Link to="/places" className="hover:text-[#A9945F] transition-all duration-300">Lugares</Link>
          {user ? (
            <Link to="/profile" className="hover:text-[#A9945F] transition-all duration-300">Perfil</Link>
          ) : (
            <div className="flex flex-row items-center gap-3 border-l border-[#A9945F] pl-3">
              <Link to="/login" className="hover:text-[#A9945F] transition-all duration-300">Iniciar Sesión</Link>
              <Link to="/register" className="hover:bg-[#b58d27] font-bold transition-all duration-300 bg-[#A9945F] text-[#284636] px-2 py-1 rounded">Registrarse</Link>
            </div>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
