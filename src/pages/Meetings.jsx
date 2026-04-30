import { useEffect, useState } from 'react'
import { getMeetings } from '../services/meetingsService'


import Cardbox from '../components/ui/Cardbox'

function Meetings() {
  const [meetings, setMeetings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

useEffect(() => {
    getMeetings()
      .then(data => setMeetings(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Cargando reuniones...</p>
  if (error) return <p>Error: {error}</p>

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <p className="text-red-500 text-lg">Error al cargar reuniones: {error}</p>
      </div>
    )
  }

  return (
    <div>
      <Cardbox
        items={meetings}
        title="Próximas Reuniones"
      />
    </div>
  )
}

export default Meetings;