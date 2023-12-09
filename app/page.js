import { NavBar, CarCard } from './components'
import rivianObjects from './utils/rivians'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar />
      {rivianObjects.map((car) => (
        <CarCard key={car.id} name={car.name} />
      ))}
    </main>
  )
}
