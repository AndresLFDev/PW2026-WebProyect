import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.nombre.trim())
      newErrors.nombre = "El nombre es obligatorio.";

    if (!formData.apellido.trim())
      newErrors.apellido = "El apellido es obligatorio.";

    if (!formData.email.trim())
      newErrors.email = "El email es obligatorio.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "El email no es válido.";

    if (!formData.password)
      newErrors.password = "La contraseña es obligatoria.";
    else if (formData.password.length < 8)
      newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    else if (!/[a-zA-Z]/.test(formData.password))
      newErrors.password = "La contraseña debe contener al menos una letra.";

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    login({
      nombre: formData.nombre.trim(),
      apellido: formData.apellido.trim(),
      email: formData.email.trim(),
    });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center pt-16 px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#1a2e23] mb-1">Crear cuenta</h1>
        <p className="text-sm text-gray-400 mb-6">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-[#A9945F] hover:underline font-medium">
            Inicia sesión
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          {/* Nombre y Apellido */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">Nombre</label>
              <input
                name="nombre"
                type="text"
                placeholder="Juan"
                value={formData.nombre}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#A9945F] transition-colors
                  ${errors.nombre ? "border-red-400 bg-red-50" : "border-gray-200"}`}
              />
              {errors.nombre && <p className="text-xs text-red-500">{errors.nombre}</p>}
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500 font-medium">Apellido</label>
              <input
                name="apellido"
                type="text"
                placeholder="Pérez"
                value={formData.apellido}
                onChange={handleChange}
                className={`border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#A9945F] transition-colors
                  ${errors.apellido ? "border-red-400 bg-red-50" : "border-gray-200"}`}
              />
              {errors.apellido && <p className="text-xs text-red-500">{errors.apellido}</p>}
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 font-medium">Email</label>
            <input
              name="email"
              type="email"
              placeholder="juan@email.com"
              value={formData.email}
              onChange={handleChange}
              className={`border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#A9945F] transition-colors
                ${errors.email ? "border-red-400 bg-red-50" : "border-gray-200"}`}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Contraseña */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500 font-medium">Contraseña</label>
            <input
              name="password"
              type="password"
              placeholder="Mínimo 8 caracteres con al menos una letra"
              value={formData.password}
              onChange={handleChange}
              className={`border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#A9945F] transition-colors
                ${errors.password ? "border-red-400 bg-red-50" : "border-gray-200"}`}
            />
            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="mt-2 py-2.5 rounded-lg bg-[#A9945F] text-white font-semibold text-sm hover:bg-[#284636] transition-colors duration-200"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;