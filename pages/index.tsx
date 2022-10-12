import type { NextPage } from 'next'
import About from '../components/About'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useState } from "react"
import styles from '../styles/Contact.module.scss';
import ContactForm from "../components/ContactForm";
const Home: NextPage = () => {
  const [submitted, setSubmitted] = useState(false);
  return (

    <div id='index'>
      <Navbar />
      <Hero />
      <Skills />
      <About />
          <section id='Contact'>
      <h1 className={styles.title}>Contact Me</h1>
      <div className={styles.contactContainer}>
        <div className={styles.contactText}>
          <h1>Let&apos;s get in touch!</h1>
          <h2>
            If you have a project in mind, job opportunity, or just want to chat, 
            send me a message!
          </h2>
        </div>
        <div className={styles.contactForm}>
          <h1 className={styles.submittedForm} style={submitted ? {display: 'block'} : {display: 'none'}}>Submitted!</h1>
          <ContactForm submitted={submitted} func={setSubmitted}/>
        </div>
      </div>
    </section>
      <Footer />
    </div>

  )
}

export default Home
