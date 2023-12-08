import Image from 'next/image'
import { NavBar, CarCard } from './components'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <NavBar />
      <CarCard />
    </main>
  )
}
