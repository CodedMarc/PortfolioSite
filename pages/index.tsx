import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
    </div>
  )
}

export default Home
