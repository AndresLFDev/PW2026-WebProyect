import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-500 text-white text-center p-10">
      <h1 className="text-4xl font-bold">Hola mundo</h1>
      <p className="mt-4">Tailwind está funcionando</p>
    </div>
  )
}

export default App
