import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import {
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'

const AuthContext = createContext()

// Traductor de códigos de error de Firebase al español
export const translateFirebaseError = (code) => {
  const errors = {
    'auth/email-already-in-use': 'Este correo ya está registrado.',
    'auth/invalid-email': 'El correo electrónico no es válido.',
    'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
    'auth/user-not-found': 'No existe una cuenta con este correo.',
    'auth/wrong-password': 'Contraseña incorrecta.',
    'auth/invalid-credential': 'Correo o contraseña incorrectos.',
    'auth/too-many-requests': 'Demasiados intentos fallidos. Intenta más tarde.',
    'auth/network-request-failed': 'Error de red. Verifica tu conexión.',
  }
  return errors[code] ?? 'Ocurrió un error inesperado. Intenta de nuevo.'
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [rol, setRol] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const response = await fetch(`/api/users/${currentUser.uid}`)
        const data = await response.json()
        setRol(data.name_rol)
      } else {
        setRol(null)
      }
      setUser(currentUser)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const register = async (email, password, displayName) => {
    const credential = await createUserWithEmailAndPassword(auth, email, password)
    if (displayName) {
      await updateProfile(credential.user, { displayName })
    }
    const response = await fetch(`/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id_user: credential.user.uid,
        name_user: displayName,
        email_user: credential.user.email
      }),
    })
    if (!response.ok) {
      throw new Error('Error al crear usuario')
    }
    return credential
  }

  const logout = () => signOut(auth)

  return (
    <AuthContext.Provider value={{ user, rol, login, register, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
