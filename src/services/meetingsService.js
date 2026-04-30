const API_URL ='/api/meetings'; 

export async function getMeetings() {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error('Error al obtener reuniones')
  return res.json()
}

export async function createMeeting(data) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Error al crear reunión')
  return res.json()
}

export async function updateMeeting(id, data) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  if (!res.ok) throw new Error('Error al actualizar reunión')
  return res.json()
}

export async function deleteMeeting(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  })
  if (!res.ok) throw new Error('Error al eliminar reunión')
  return res.json()
}