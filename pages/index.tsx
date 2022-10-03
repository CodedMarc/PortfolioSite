import type { NextPage } from 'next'
import About from '../components/About'
import Skills from '../components/Skills'
import { ReactNode } from 'react';
import styles from '../styles/Home.module.scss';
import Navbar from '../components/Navbar';
import Cryptracker from '../public/assets/Cryptracker.png'
import SongPalate from '../public/assets/SongPalatePic.png';
import CoffeePic from '../public/assets/CoffeePic.png';
import Panoptic from '../public/assets/PanopticPrev.gif';
import Image from 'next/image';
import pixelme from '../public/assets/pixelme.svg';
import Hero from '../components/Hero';
import { 
  Container,
  Flex,
  Box,
  SimpleGrid,
  Text,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Grid,
  Heading, 
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Home: NextPage = () => {
  // NIGHT MODE
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div id='index'>
      {/* ************************* NAVBAR START ************************* */}
      <Navbar />
      {/* ************************* HERO START ************************* */}
      <Hero />
      {/* ************************* PROJECTS ************************* */}
      <Skills />
      <About />
    </div>

  )
}

export default Home
