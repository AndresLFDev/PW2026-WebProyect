import { useState } from 'react'
import { createMeeting } from '../../services/meetingsService'
import { useAuth } from '../../context/AuthContext'

function MeetingModal({ onClose, onCreated }) {
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    title: '',
    description: '',
    date_time: '',
    location: '',
    coordinates: '',
    max_capacity: ''
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    console.log('Enviando:', JSON.stringify({ ...form, created_by: user.uid }))
    try {
      await createMeeting({ ...form, created_by: user.uid })
      onCreated()
      onClose()
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-[#284636] font-bold text-lg mb-4">Crear Reunión</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input name="title" placeholder="Título" onChange={handleChange} required
            className="border border-gray-300 rounded px-3 py-2 text-sm" />
          <textarea name="description" placeholder="Descripción" onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm" />
          <input name="date_time" type="datetime-local" onChange={handleChange} required
            className="border border-gray-300 rounded px-3 py-2 text-sm" />
          <input name="location" placeholder="Lugar" onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm" />
          <input name="coordinates" placeholder="Coordenadas (ej: 4.7110,-74.0721)" onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm" />
          <input name="max_capacity" type="number" placeholder="Capacidad máxima" onChange={handleChange}
            className="border border-gray-300 rounded px-3 py-2 text-sm" />
          <div className="flex gap-2 justify-end mt-2">
            <button type="button" onClick={onClose}
              className="px-4 py-2 text-sm border border-gray-300 rounded hover:bg-gray-100 transition-colors">
              Cancelar
            </button>
            <button type="submit" disabled={loading}
              className="px-4 py-2 text-sm bg-[#284636] text-white rounded hover:bg-[#1e382a] transition-colors">
              {loading ? 'Creando...' : 'Crear'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MeetingModal