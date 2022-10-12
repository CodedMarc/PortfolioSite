import styles from '../styles/About.module.scss';
import { useState } from 'react'
import Image from 'next/image';
import pixelme from '../public/assets/pixelme.svg';

const PlayerCard = () => {
  return (
    <div className={styles.PlayerCard}>
    
      <div className={styles.textBox}>
        <p className={styles.box1}>
          I&apos;m Marc Doran, Software Engineer, and I enjoy creating things on the internet. 
          My interest for programming first started back in 2014, when I was making plugins for servers that lived on this small indie game you might have heard of called <em className={styles.minecraft}>Minecraft</em>.
          I went on to explore other areas of development throughout high school such as iOS development. It wasn&apos;t until 2019 where I decided to make Software Engineering my career, with a specialization in <em className={styles.buzzword}>Full Stack Web Development</em>
        </p>
        <p className={styles.box2}>
          After months of being <em className={styles.buzzword}>self-taught + some college</em>, I decided to enroll into <em className={styles.buzzword}>Codesmith</em>, a coding bootcamp. 
          From there, I had the opportunity to learn & work on my skills building many full stack applications, launching my own <a href='https://panoptic.app/' target="_blank" rel="noreferrer">Open Source Product</a>, and establishing close relationships with the like-minded and talented people I was surrounded with along the way. 
          Fast forward to today, after many open source contributions and having <em className={styles.buzzword}>mentored other engineers</em>, I&apos;m constantly seeking out opportunities for my next chapter of growth.
        </p>
      </div>

    </div>
  )
}

export default PlayerCard