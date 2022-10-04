import styles from '../styles/Home.module.scss';
import pixelme from '../public/assets/pixelme.svg';
import PointToMe from './PointToMe';
import Image from 'next/image';
import { TriangleDownIcon } from '@chakra-ui/icons';
import { Box, Icon, useColorModeValue, Text, createIcon } from '@chakra-ui/react';
import { useState } from 'react';
const Hero = () => {
  const [spin, setSpin] = useState(false);
  return (
      <div className={styles.Hero} id='Hero'>
        <div className={styles.HeroLeft}>
          <p className={`${styles.font2}`}>Hi, I&apos;m Marc Doran!</p>
          <h1 className={`${styles.font1} ${styles.whiteish} `}>Software Engineer</h1>
          <p className={styles.font3}>I am a Full Stack Software Engineer with the skills to transform ideas into reality!</p>
        </div>
        <div className={styles.HeroRight}>
          <PointToMe />
          <div className={spin ? `${styles.spin}` : `${styles.pixelmeImg}`} onClick={() => setSpin(true)} onAnimationEnd={() => setSpin(false)}>
            <Image unoptimized={true} priority layout='responsive' quality={100} width={400} height={400}src={pixelme} alt='Pixel Portrait of Marc Doran' />
          </div>
        </div>
          <div className={styles.scrollDown}>
            <p>scroll down</p>
            <TriangleDownIcon />
          </div>
      </div>
  )
}

export default Hero