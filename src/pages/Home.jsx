import Hero from '../components/sections/Hero'
import Description from '../components/sections/Description'
import Cardbox from '../components/ui/Cardbox'
import placeholderMeetings from '../assets/placeholderPlaces.jpg'
import placeholderPlaces from '../assets/placeholderPlaces.jpg'

const meetings = [
  {
    id: 1,
    title: "Reunion 1",
    date: "2022-01-01",
    location: "Lugar 1",
    image: placeholderMeetings
  },
  {
    id: 2,
    title: "Reunion 2",
    date: "2022-01-02",
    location: "Lugar 2",
    image: placeholderMeetings
  },
  {
    id: 3,
    title: "Reunion 3",
    date: "2022-01-03",
    location: "Lugar 3",
    image: placeholderMeetings
  },
  {
    id: 4,
    title: "Reunion 4",
    date: "2022-01-04",
    location: "Lugar 4",
    image: placeholderMeetings
  },
  {
    id: 5,
    title: "Reunion 5",
    date: "2022-01-05",
    location: "Lugar 5",
    image: placeholderMeetings
  },
  {
    id: 6,
    title: "Reunion 6",
    date: "2022-01-06",
    location: "Lugar 6",
    image: placeholderMeetings
  }
]
const places = [
  {
    id: 1,
    title: "Lugar 1",
    location: "Lugar 1",
    image: placeholderPlaces
  },
  {
    id: 2,
    title: "Lugar 2",
    location: "Lugar 2",
    image: placeholderPlaces
  },
  {
    id: 3,
    title: "Lugar 3",
    location: "Lugar 3",
    image: placeholderPlaces
  },
  {
    id: 4,
    title: "Lugar 4",
    location: "Lugar 4",
    image: placeholderPlaces
  },
  {
    id: 5,
    title: "Lugar 5",
    location: "Lugar 5",
    image: placeholderPlaces
  }
]

function Home() {
  return (
    <div>
      <Hero />
      <Description />
      <Cardbox
        items={meetings}
        title={"Proximas Reuniones"}
      />
      <Cardbox
        items={places}
        title={"Lugares"}
      />
    </div>
  )
}

export default Home