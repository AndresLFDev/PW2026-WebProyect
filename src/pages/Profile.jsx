import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import TopBannerProfile from "../components/sections/Top-Banner-Profile";
import Cardbox from "../components/ui/Cardbox";
import profilePricture from "../assets/perfil.png";
import placeholderPlaces from "../assets/placeholderPlaces.jpg";

const places = [
  { id: 1, title: "Lugar 1", location: "Ciudad de México", image: placeholderPlaces },
  { id: 2, title: "Lugar 2", location: "Guadalajara", image: placeholderPlaces },
  { id: 3, title: "Lugar 3", location: "Monterrey", image: placeholderPlaces },
  { id: 4, title: "Lugar 4", location: "Oaxaca", image: placeholderPlaces },
  { id: 5, title: "Lugar 5", location: "Cancún", image: placeholderPlaces },
];

const companions = [
  { id: 1, img: "https://i.pravatar.cc/150?img=11", name: "Ana Torres" },
  { id: 2, img: "https://i.pravatar.cc/150?img=12", name: "Luis Méndez" },
  { id: 3, img: "https://i.pravatar.cc/150?img=13", name: "Sofía Ruiz" },
  { id: 4, img: "https://i.pravatar.cc/150?img=33", name: "Daniel Orozco" },
  { id: 5, img: "https://i.pravatar.cc/150?img=22", name: "María López" },
];

const user1 = {
  name: "Juan",
  lastName: "Perez",
  city: "Ciudad de México",
  friends: 15,
  memberSince: "2025",
  img: profilePricture,
};

const ActionButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2.5 w-full bg-white border border-[#284636] text-[#284636] py-2 px-4 rounded-full text-sm font-medium hover:bg-[#284636] hover:text-white transition-colors duration-200 shadow-sm">
    {icon}
    <span>{label}</span>
  </button>
);

function Profile() {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("lugares");

  const tabs = [
    { id: "lugares", label: "Mis Lugares" },
    { id: "reuniones", label: "Reuniones" },
    { id: "grupos", label: "Grupos" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-[54px]">
      <TopBannerProfile user={user1} />

      {/* Main content */}
      <div className="max-w-[900px] mx-auto px-4 md:px-10 py-6 flex flex-col md:flex-row md:items-stretch gap-6 min-h-[calc(100vh-54px)]">

        {/* Left sidebar */}
        <aside className="w-full md:w-52 shrink-0 flex flex-col gap-4 h-full">

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col gap-2.5">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Acciones</h3>
            <ActionButton
              label="Crear Reunión"
              icon={
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
              }
            />
            <ActionButton
              label="Crear Grupo"
              icon={
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              }
            />
            <ActionButton
              label="Agregar Lugar"
              icon={
                <svg className="w-4 h-4 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              }
            />
          </div>

          {/* Companions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Compañeros</h3>
              <span className="text-xs text-[#284636] font-semibold">{user1.friends}</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {companions.map((c) => (
                <div key={c.id} className="flex flex-col items-center gap-1 cursor-pointer group">
                  <div className="relative">
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-14 h-14 object-cover rounded-full border-2 border-gray-100 group-hover:border-[#284636] transition-colors duration-200"
                    />
                    <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  <span className="text-[9px] text-gray-500 font-medium text-center leading-tight line-clamp-2">{c.name}</span>
                </div>
              ))}
            </div>
            <button className="mt-3 w-full text-center text-xs text-[#284636] hover:underline font-medium">
              Ver todos
            </button>
          </div>

          {/* Logout */}
          <button
            onClick={() => { logout(); window.location.href = "/login"; }}
            className="flex items-center justify-center gap-2 w-full text-sm text-gray-400 hover:text-red-500 transition-colors py-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h5a2 2 0 012 2v1" />
            </svg>
            Cerrar sesión
          </button>
        </aside>

        {/* Main area */}
        <main className="flex-1 min-w-0 flex flex-col gap-4 h-full">

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col flex-1">
            <div className="flex border-b border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-3 text-sm font-semibold transition-colors duration-200
                    ${activeTab === tab.id
                      ? "text-[#284636] border-b-2 border-[#284636] bg-[#f0f7f3]"
                      : "text-gray-400 hover:text-gray-600"
                    }`}>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4 flex-1">
              {activeTab === "lugares" && (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {places.map((place) => (
                    <div key={place.id} className="group relative rounded-lg overflow-hidden shadow-sm border border-gray-100 cursor-pointer">
                      <img src={place.image} alt={place.title} className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                      <div className="p-2">
                        <p className="text-xs font-semibold text-gray-700 truncate">{place.title}</p>
                        <p className="text-[10px] text-gray-400 flex items-center gap-1">
                          <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                          </svg>
                          {place.location}
                        </p>
                      </div>
                    </div>
                  ))}
                  {/* Add place card */}
                  <button className="rounded-lg border-2 border-dashed border-gray-200 h-full min-h-[120px] flex flex-col items-center justify-center gap-2 text-gray-300 hover:border-[#284636] hover:text-[#284636] transition-colors duration-200">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    <span className="text-xs font-medium">Agregar lugar</span>
                  </button>
                </div>
              )}

              {activeTab === "reuniones" && (
                <div className="flex flex-col items-center justify-center py-12 text-gray-300">
                  <svg className="w-12 h-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">No tienes reuniones aún</p>
                  <button className="mt-3 text-xs text-[#284636] hover:underline font-medium">Crear una reunión</button>
                </div>
              )}

              {activeTab === "grupos" && (
                <div className="flex flex-col items-center justify-center py-12 text-gray-300">
                  <svg className="w-12 h-12 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm">No perteneces a ningún grupo</p>
                  <button className="mt-3 text-xs text-[#284636] hover:underline font-medium">Crear un grupo</button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Profile;
