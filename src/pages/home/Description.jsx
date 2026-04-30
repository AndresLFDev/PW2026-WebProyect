function Description() {
  return (
    <section id="nosotros" className="flex flex-col px-10 py-20 md:p-0 md:flex-row ">
            <div className="bg-forest-800 flex items-center justify-center md:min-h-screen md:w-1/3">
                <img src="./src/assets/LogoMonoColor.png" alt="Logo de la pagina" width="100px" height="100px"
                    className="hidden md:block">
                </img> 
            </div>
            <div className="flex flex-col items-center justify-center w-full md:w-2/3 md:bg-gold-600">
                <h1 className="text-center text-2xl font-bold xl:max-w-1/3 md:max-w-1/2 md:text-amber-50">
                    Encuentra La Compañía Y Conexión Natural Para Sanar
                </h1>
                <p className="text-center mt-3.5 md:max-w-1/2 xl:max-w-1/3 md:text-amber-50 text-xl">
                    En un mundo acelerado, encontrar un espacio seguro para reconectar con uno mismo y con la naturaleza
                    puede ser un desafío. BIOsalud nace de la necesidad de crear esos puentes: lugares donde la calma
                    natural se encuentra con el apoyo comunitario.
                </p>
            </div>
        </section>
  )
}

export default Description
