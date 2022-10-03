import { 
  Flex,
  Box,
  Text,
  Button,
  Stack,
  useColorMode,

} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import styles from '../styles/Home.module.scss';
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box zIndex={'10'} position='fixed' w='100%' top='0' px={{base: '2%', md: '9%'}} bg='rgba(0,0,0,0)'>
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      {/* <Flex alignItems='center' justify='center' maxW='80px'>
        <Image src={pixelme} alt='Pixel Portrait of Marc Doran'/>
      </Flex> */}
      <Flex justify={'space-between'} align='center'>
        {/* <Box>
          <Flex border='2px' borderColor='white' borderRadius={'100%'} overflow='hidden' maxW={16} justify='center' align='center'>
            <Image src={pixelme} alt='Pixel Portrait of Marc Doran' />
          </Flex>
        </Box> */}
          <Text ml='20px' className={styles.NavTitle} color='yellow.300' fontWeight={800}>CodedMarc</Text>
      </Flex>
      <Flex alignItems={'center'}>
        <Stack direction={'row'} spacing={7}>
          <Button bg='white' color='black' onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </Flex>
  </Box>
  )
}

export default Navbar