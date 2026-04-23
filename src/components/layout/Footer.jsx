function Footer() {
    return (
        <footer className="bg-[#1a2e23] flex items-center justify-center text-amber-50 py-12 px-10 mt-14">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
                <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2.5 text-[#A9945F] font-bold text-xl">
                        <img src="./src/assets/LogoMonoColor.png" alt="Logo" width="40" height="40">
                        </img>
                        <span>BIOsalud</span>
                    </div>
                </div>
                <div>
                    <h3 className="text-[#A9945F] font-bold mb-4">Compañía</h3>
                    <ul className="flex flex-col gap-2 text-sm opacity-80">
                        <li><a href="#" className="hover:text-[#A9945F] transition-colors">Sobre nosotros</a></li>
                        <li><a href="#" className="hover:text-[#A9945F] transition-colors">Fundadores</a></li>
                        <li><a href="#" className="hover:text-[#A9945F] transition-colors">Contacto</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[#A9945F] font-bold mb-4">Servicios</h3>
                    <ul className="flex flex-col gap-2 text-sm opacity-80">
                        <li><a href="#" className="hover:text-[#A9945F] transition-colors">Grupos de ayuda</a></li>
                        <li><a href="#" className="hover:text-[#A9945F] transition-colors">Encontrar Profesionales</a>
                        </li>
                        <li><a href="#" className="hover:text-[#A9945F] transition-colors">Asistir a una reunion</a>
                        </li>
                        <li><a href="#" className="hover:text-[#A9945F] transition-colors">Descubrir Lugares</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-[#A9945F] font-bold mb-4">Redes Sociales</h3>
                    <div className="flex gap-4">
                        <a href="#" className="hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.197-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                            </svg>
                        </a>
                        <a href="#" className="hover:scale-110 transition-transform">
                            <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
