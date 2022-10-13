import type { NextPage } from 'next'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills'
import About from '../components/About'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
const Home: NextPage = () => {

  return (
    
    <div id='index'>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>

  )
}

export default Home
