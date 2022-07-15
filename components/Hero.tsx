import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div className={styles.heroLeft}>
        <p className={styles.subtitle}>TRANSFORMING IDEAS INTO REALITY!</p>
        <h1>Software Engineer</h1>
        <p className={styles.longText}>I am a <span className={styles.FSD}>Full-Stack Software Engineer</span> that completes Web Applications from start to finish for companies, startups, and individuals all around the globe.</p>
        <button>Get Started</button>
      </div>
      <div className={styles.heroRight}>

      </div>
    </div>
  )
}

export default Hero