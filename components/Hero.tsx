import styles from './Hero.module.scss';
import Cryptracker from '../public/assets/Cryptracker.png'
import SongPalate from '../public/assets/SongPalatePic.png';
import CoffeePic from '../public/assets/CoffeePic.png';
import Panoptic from '../public/assets/PanopticPrev.gif';
import Image from 'next/image';


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
        <div className={styles.imgContainer}>
          <div className={`${styles.SongPalateImg} ${styles.heroImg}`}>
            <Image src={SongPalate} alt="Song Palate Project" />
          </div>
          <div className={`${styles.PanopticImg} ${styles.heroImg}`}>
            <Image unoptimized={true} priority src={Panoptic} alt="Panoptic Web Metrics Tracker Project" />
          </div>
          <div className={`${styles.CoffeeImg} ${styles.heroImg}`}>
            <Image src={CoffeePic} alt="Coffee Shop Landing Page Project" />
          </div>
          <div className={`${styles.CryptoImg} ${styles.heroImg}`}>
            <Image src={Cryptracker} alt="Cryptocurrency Tracker Project" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero