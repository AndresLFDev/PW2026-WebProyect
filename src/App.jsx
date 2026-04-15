import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import PrivateRoute from './components/layout/Privateroute'
import Home from './pages/Home'
import Meetings from './pages/Meetings'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
 
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/meetings" element={<Meetings />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}
 
export default App