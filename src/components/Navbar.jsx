import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav class="flex py-2 px-4  items-center gap-10 bg-[#284636]">
      <Link to="/">
        <div id="logotipo" class="flex flex-row items-center gap-2.5 text-[#A9945F] font-bold ">
          <img src="./src/assets/LogoMonoColor.png" alt="Logo de la Pagina" width="50px" height="50px" />
          <span>BIOsalud</span>
        </div>
      </Link>
      <div class="w-full flex justify-end text-amber-50">
        <ul class="flex flex-row gap-3">
          <Link to="#reuniones" class="hover:text-[#A9945F] transition-all duration-300">Reuniones</Link>
          <Link to="#grupos" class="hover:text-[#A9945F] transition-all duration-300">Grupos</Link>
          <Link to="/Profile" class="hover:text-[#A9945F] transition-all duration-300">Lugares</Link>
          <Link to="/Register" class="hover:text-[#A9945F] transition-all duration-300">Registrarse</Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
