import type { NextPage } from 'next'
import About from '../components/About'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Badges from '../components/Badges';
import Contact from '../components/Contact';
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
      <Contact />
    </div>

  )
}

export default Home
