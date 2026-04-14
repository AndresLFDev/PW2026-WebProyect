import { useAuth } from "../context/AuthContext";

function Profile() {
  const { logout } = useAuth();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-[#A9945F] mb-4">Profile</h1>
      <button onClick={logout} className="p-2 rounded bg-[#ca2b13] text-white hover:bg-[#284636] transition-colors">logout</button>
    </div>
  )
}

export default Profile