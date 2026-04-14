import { useAuth } from "../context/AuthContext";

function Register() {
  const {login, logout} = useAuth();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-[#A9945F] mb-4">Register</h1>
        <form className="flex flex-col gap-2 ">
          <input className="p-2 rounded border border-gray-300"
            type="text"
            placeholder="Name" />
          <input className="p-2 rounded border border-gray-300" type="email" placeholder="Email" />
          <input className="p-2 rounded border border-gray-300" type="password" placeholder="Password" />
          <button onClick={() => login({name: "John"})} className="p-2 rounded bg-[#A9945F] text-white hover:bg-[#284636] transition-colors" type="button">Register</button>
        </form>
      </div>
    </>
  );
}

export default Register;