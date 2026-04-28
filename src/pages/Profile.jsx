import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const mockMeetings = [
  { id: 1, title: "Reunión de bienvenida", date: "2024-03-01", location: "Parque Central" },
  { id: 2, title: "Taller de respiración", date: "2024-03-15", location: "Jardín Botánico" },
  { id: 3, title: "Círculo de sanación", date: "2024-04-02", location: "Centro BIOsalud" },
];

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("perfil");
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const [formData, setFormData] = useState({
    nombre: user?.nombre || "",
    apellido: user?.apellido || "",
    email: user?.email || "",
    bio: "",
    foto: null,
  });

  const [passwordData, setPasswordData] = useState({ actual: "", nueva: "", confirmar: "" });
  const [passwordMsg, setPasswordMsg] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (passwordData.nueva !== passwordData.confirmar) {
      setPasswordMsg("Las contraseñas no coinciden.");
      return;
    }
    if (passwordData.nueva.length < 8) {
      setPasswordMsg("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    if (!/[a-zA-Z]/.test(passwordData.nueva)) {
      setPasswordMsg("La contraseña debe contener al menos una letra.");
      return;
    }
    setPasswordMsg("¡Contraseña actualizada correctamente!");
    setPasswordData({ actual: "", nueva: "", confirmar: "" });
  };

  const handleLogout = () => { logout(); navigate("/"); };
  const handleDelete = () => { logout(); navigate("/"); };

  const navItems = [
    { key: "perfil",    label: "Mi Perfil" },
    { key: "reuniones", label: "Mis Reuniones" },
    { key: "password",  label: "Cambiar Contraseña" },
    { key: "cuenta",    label: "Cuenta" },
  ];

  const initials = `${formData.nombre?.[0] || ""}${formData.apellido?.[0] || ""}`.toUpperCase() || "U";

  return (
    <div className="min-h-screen bg-[#f5f0e8] pt-16 flex">

      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-[#1a2e23] text-amber-50 flex flex-col py-8 px-4 gap-2 fixed top-16 left-0">
        <div className="flex flex-col items-center gap-3 mb-6">
          <div className="w-20 h-20 rounded-full bg-[#A9945F] flex items-center justify-center text-2xl font-bold text-[#1a2e23] overflow-hidden">
            {formData.foto
              ? <img src={URL.createObjectURL(formData.foto)} alt="avatar" className="w-full h-full object-cover" />
              : initials}
          </div>
          <div className="text-center">
            <p className="font-semibold text-[#A9945F]">{formData.nombre} {formData.apellido}</p>
            <p className="text-xs opacity-60">{formData.email}</p>
          </div>
        </div>

        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveSection(item.key)}
            className={`text-left px-4 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium
              ${activeSection === item.key ? "bg-[#A9945F] text-[#1a2e23]" : "hover:bg-[#284636] text-amber-50/80"}`}
          >
            {item.label}
          </button>
        ))}

        <div className="mt-auto pt-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-900/30 transition-all duration-200"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="ml-64 flex-1 p-10">

        {/* MI PERFIL */}
        {activeSection === "perfil" && (
          <div className="max-w-2xl">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-2xl font-bold text-[#1a2e23]">Mi Perfil</h1>
              {!isEditing && (
                <button onClick={() => setIsEditing(true)}
                  className="px-4 py-2 rounded-lg bg-[#A9945F] text-[#1a2e23] text-sm font-semibold hover:bg-[#284636] hover:text-amber-50 transition-all duration-200">
                  Editar perfil
                </button>
              )}
            </div>

            {!isEditing ? (
              <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-6">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full bg-[#A9945F] flex items-center justify-center text-3xl font-bold text-[#1a2e23] overflow-hidden flex-shrink-0">
                    {formData.foto
                      ? <img src={URL.createObjectURL(formData.foto)} alt="avatar" className="w-full h-full object-cover" />
                      : initials}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#1a2e23]">{formData.nombre} {formData.apellido}</h2>
                    <p className="text-sm text-gray-400">{formData.email}</p>
                  </div>
                </div>
                <hr className="border-gray-100" />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Nombre</p>
                    <p className="font-medium text-[#1a2e23]">{formData.nombre}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Apellido</p>
                    <p className="font-medium text-[#1a2e23]">{formData.apellido}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-400 mb-1">Email</p>
                    <p className="font-medium text-[#1a2e23]">{formData.email}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-gray-400 mb-1">Biografía</p>
                    <p className="text-[#1a2e23] leading-relaxed">{formData.bio || <span className="text-gray-300 italic">Sin biografía</span>}</p>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleEdit} className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-[#A9945F] flex items-center justify-center text-2xl font-bold text-[#1a2e23] overflow-hidden flex-shrink-0">
                    {formData.foto
                      ? <img src={URL.createObjectURL(formData.foto)} alt="avatar" className="w-full h-full object-cover" />
                      : initials}
                  </div>
                  <label className="cursor-pointer px-4 py-2 rounded-lg border border-[#A9945F] text-[#A9945F] text-sm hover:bg-[#A9945F] hover:text-white transition-all duration-200">
                    Cambiar foto
                    <input type="file" accept="image/*" className="hidden"
                      onChange={(e) => setFormData({ ...formData, foto: e.target.files[0] })} />
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {["nombre","apellido"].map((field) => (
                    <div key={field} className="flex flex-col gap-1">
                      <label className="text-xs text-gray-500 capitalize">{field}</label>
                      <input className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#A9945F]"
                        value={formData[field]}
                        onChange={(e) => setFormData({ ...formData, [field]: e.target.value })} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500">Email</label>
                  <input type="email" className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#A9945F]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500">Biografía</label>
                  <textarea rows={3} className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#A9945F] resize-none"
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })} />
                </div>
                <div className="flex gap-3 justify-end">
                  <button type="button" onClick={() => setIsEditing(false)}
                    className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-all">
                    Cancelar
                  </button>
                  <button type="submit"
                    className="px-4 py-2 rounded-lg bg-[#A9945F] text-white text-sm font-semibold hover:bg-[#284636] transition-all duration-200">
                    Guardar cambios
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* MIS REUNIONES */}
        {activeSection === "reuniones" && (
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-[#1a2e23] mb-8">Mis Reuniones</h1>
            <div className="flex flex-col gap-4">
              {mockMeetings.map((m) => (
                <div key={m.id} className="bg-white rounded-2xl shadow-sm p-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-[#1a2e23]">{m.title}</h3>
                    <p className="text-sm text-gray-400 mt-1">{m.location} · {m.date}</p>
                  </div>
                  <span className="text-xs px-3 py-1 rounded-full bg-[#e8f5e9] text-[#284636] font-medium">Asistida</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CAMBIAR CONTRASEÑA */}
        {activeSection === "password" && (
          <div className="max-w-md">
            <h1 className="text-2xl font-bold text-[#1a2e23] mb-8">Cambiar Contraseña</h1>
            <form onSubmit={handlePasswordChange} className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-5">
              {[
                { key: "actual",    label: "Contraseña actual" },
                { key: "nueva",     label: "Nueva contraseña" },
                { key: "confirmar", label: "Confirmar nueva contraseña" },
              ].map(({ key, label }) => (
                <div key={key} className="flex flex-col gap-1">
                  <label className="text-xs text-gray-500">{label}</label>
                  <input type="password"
                    className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#A9945F]"
                    value={passwordData[key]}
                    onChange={(e) => setPasswordData({ ...passwordData, [key]: e.target.value })} />
                </div>
              ))}
              {passwordMsg && (
                <p className={`text-sm ${passwordMsg.includes("correctamente") ? "text-green-600" : "text-red-500"}`}>
                  {passwordMsg}
                </p>
              )}
              <button type="submit"
                className="px-4 py-2 rounded-lg bg-[#A9945F] text-white text-sm font-semibold hover:bg-[#284636] transition-all duration-200">
                Actualizar contraseña
              </button>
            </form>
          </div>
        )}

        {/* CUENTA */}
        {activeSection === "cuenta" && (
          <div className="max-w-md">
            <h1 className="text-2xl font-bold text-[#1a2e23] mb-8">Cuenta</h1>
            <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-semibold text-[#1a2e23] mb-1">Cerrar sesión</h3>
                <p className="text-sm text-gray-400 mb-4">Saldrás de tu cuenta en este dispositivo.</p>
                <button onClick={handleLogout}
                  className="px-4 py-2 rounded-lg border border-[#A9945F] text-[#A9945F] text-sm font-semibold hover:bg-[#A9945F] hover:text-white transition-all duration-200">
                  Cerrar sesión
                </button>
              </div>
              <hr className="border-gray-100" />
              <div>
                <h3 className="font-semibold text-red-600 mb-1">Zona de peligro</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Eliminar tu cuenta es permanente. No podrás recuperar tus datos.
                </p>
                {!showDeleteConfirm ? (
                  <button onClick={() => setShowDeleteConfirm(true)}
                    className="px-4 py-2 rounded-lg border border-red-400 text-red-500 text-sm font-semibold hover:bg-red-500 hover:text-white transition-all duration-200">
                    Eliminar cuenta
                  </button>
                ) : (
                  <div className="flex flex-col gap-3 p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-sm text-red-700 font-medium">¿Estás seguro? Esta acción no se puede deshacer.</p>
                    <div className="flex gap-3">
                      <button onClick={() => setShowDeleteConfirm(false)}
                        className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-500 hover:bg-gray-50 transition-all">
                        Cancelar
                      </button>
                      <button onClick={handleDelete}
                        className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-700 transition-all">
                        Sí, eliminar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default Profile;