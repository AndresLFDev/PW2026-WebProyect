import Cardbox from '../components/ui/Cardbox'
const meetings = [
  {
    id: 1,
    title: "Reunion 1",
    date: "2022-01-01",
    location: "Lugar 1",
    image: "https://images.unsplash.com/photo-1506744038136-49561d31d55b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 2,
    title: "Reunion 2",
    date: "2022-01-02",
    location: "Lugar 2",
    image: "https://images.unsplash.com/photo-1506744038136-49561d31d55b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 3,
    title: "Reunion 3",
    date: "2022-01-03",
    location: "Lugar 3",
    image: "https://images.unsplash.com/photo-1506744038136-49561d31d55b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 4,
    title: "Reunion 4",
    date: "2022-01-04",
    location: "Lugar 4",
    image: "https://images.unsplash.com/photo-1506744038136-49561d31d55b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 5,
    title: "Reunion 5",
    date: "2022-01-05",
    location: "Lugar 5",
    image: "https://images.unsplash.com/photo-1506744038136-49561d31d55b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  },
  {
    id: 6,
    title: "Reunion 6",
    date: "2022-01-06",
    location: "Lugar 6",
    image: "https://images.unsplash.com/photo-1506744038136-49561d31d55b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
]

function Meetings() {
  return (
    <div>
      <Cardbox
        items={meetings}
        title={"Proximas Reuniones"}
      />
    </div>
  )
}

export default Meetings;