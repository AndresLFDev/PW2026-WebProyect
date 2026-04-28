import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.email.trim())
      newErrors.email = "El email es obligatorio.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "El email no es válido.";
    if (!formData.password)
      newErrors.password = "La contraseña es obligatoria.";
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
    // Sin backend: simula login con el email ingresado
    const nombreFromEmail = formData.email.split("@")[0];
    login({
      nombre: nombreFromEmail,
      apellido: "",
      email: formData.email.trim(),
    });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-[#f5f0e8] flex items-center justify-center pt-16 px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#1a2e23] mb-1">Iniciar sesión</h1>
        <p className="text-sm text-gray-400 mb-6">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="text-[#A9945F] hover:underline font-medium">
            Regístrate
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
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
              placeholder="Tu contraseña"
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
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;