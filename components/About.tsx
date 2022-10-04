import styles from '../styles/About.module.scss';
import PlayerCard from './PlayerCard';
const About = () => {
  return (
    <section id='About'>
      <h1 className={styles.aboutTitle}>Player Card / About Me</h1>
      <PlayerCard />
    </section>

  )
}

export default About