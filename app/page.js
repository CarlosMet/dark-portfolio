import Image from 'next/image'
import NavBar from './components/NavBar'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className='relative w-screen'>
      <NavBar />
      <Hero />
    </main>
  )
}
