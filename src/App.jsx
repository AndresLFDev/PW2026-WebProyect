import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PrivateRoute from './components/layout/Privateroute'
import Home from './pages/Home/Home'
import Meetings from './pages/Meetings'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'

function App() {
  const location = useLocation()
  const isNavbarVisible = !['/login', '/register'].includes(location.pathname)

  return (
    <>
      {isNavbarVisible && <Navbar />}
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
      <Footer />
    </>
  )
}

export default App