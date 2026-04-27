
function TopBannerProfile({ user, onEditProfile }) {
    return (
        <div className="w-full">
            {/* Cover Banner */}
            <div className="relative w-full h-52 md:h-64 bg-linear-to-br from-forest-800 via-forest-700 to-forest-600 overflow-hidden">
                <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            </div>

            {/* Profile Info Card */}
            <div className="bg-white shadow-md border-b border-gray-100">
                <div className="max-w-[900px] mx-auto px-4 md:px-10">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between pb-4">
                        {/* Avatar + Name */}
                        <div className="flex flex-col md:flex-row md:items-end gap-4">
                            <div className="relative z-10 -mt-16 md:-mt-20 shrink-0">
                                <img
                                    src={user.img}
                                    alt={`${user.name} ${user.lastName}`}
                                    className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-full border-4 border-white shadow-lg"
                                />
                            </div>
                            <div className="pb-1 md:pb-3">
                                <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                                    {user.name} {user.lastName}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4 mt-1.5 text-sm text-gray-500">
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-forest-700" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        {user.city}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-forest-700" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                        </svg>
                                        {user.friends} compañeros
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <svg className="w-4 h-4 text-forest-700" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z" />
                                        </svg>
                                        Miembro desde {user.memberSince}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Edit Button */}
                        <div className="mt-3 md:mt-0 md:pb-3">
                            <button
                                onClick={onEditProfile}
                                className="flex items-center gap-2 bg-[#A9945F] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-forest-800 transition-colors duration-300 shadow">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                </svg>
                                Editar Perfil
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBannerProfile;
