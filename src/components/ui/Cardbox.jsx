function Card({ item }) {
    return (
        <div className="flex flex-col border-2 border-gray-200 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <img src={item.image} alt={item.title} className="rounded-t-lg w-full h-48 object-cover" />
            <div className="flex flex-col gap-1 p-2">
                <h2 className="font-semibold">{item.title}</h2>
                <div className="flex flex-row items-center gap-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <p>{item.location}</p>
                </div>
                {item.date && (
                    <div className="flex flex-row items-center gap-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
                        </svg>
                        <p>{item.date}</p>
                    </div>
                )}
                <div className="flex flex-row items-center justify-end">
                    <a href="#" className="text-[#A9945F] hover:text-[#1e382a] hover:scale-105 transition-all duration-300">
                        ver más
                    </a>
                </div>
            </div>
        </div>
    )
}

function Cardbox({ items, title }) {
    return (
        <section id="reuniones" className="px-10 flex flex-col gap-5 sm:mt-16">
            <div className="flex items-center w-full px-4 md:px-10 mt-14 mb-16 opacity-70">
                <div className="grow h-px bg-gray-400"></div>
                <span className="mx-6 text-gray-500 font-serif text-[1.25rem] tracking-wide">{title}</span>
                <div className="grow h-px bg-gray-400"></div>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                {items.map((item) => (
                    <Card
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </section>
    )
}

export default Cardbox