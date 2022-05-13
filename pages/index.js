import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import NextLink from 'next/link'
import DarkModeSwitch from './components/DarkModeSwitch';


export default function Home() {
  const property = {
    imageUrl: 'https://i.ibb.co/ZmmGzQP/sign-g4ddffbdb3-640.png',
    imageAlt: 'Image'
  }

  return (
    <Stack
    as='main'
    align='center'
    >
     <Box>
     <Flex
          flexDirection="row"
          w="400px"
          pt={4}
          justify="space-between"
          >
            <DarkModeSwitch />
            {/* Menu Items */}

            <Menu>
              <MenuButton
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
              >
               <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <MenuItem>
                <NextLink href='/home' passHref>
                  <Link>Home</Link>
                </NextLink>
                </MenuItem>
                <MenuItem>
                <NextLink href='/profile' passHref>
                  <Link>Profile</Link>
                </NextLink>
                </MenuItem>
                <MenuItem>
                <NextLink href='/updateInfo' passHref>
                  <Link>Update Info</Link>
                </NextLink>
                </MenuItem>
                <MenuItem>
                <NextLink href='/login' passHref>
                  <Link>Login</Link>
                </NextLink>
                </MenuItem>
              </MenuList>
            </Menu>

          </Flex>
     <Box w="400px" borderWidth='1px' borderRadius='lg' overflow='hidden' mt={8} p={4} bg="blue.800">
      <Image src={property.imageUrl} alt={property.imageAlt} />
      <Box
      py={8}
      >
      <Heading
      as='h4'
      size='md'
      color='teal'
      >
        New here?
      </Heading>
      <Box py={4} textAlign='center'>
      <NextLink href='/login' passHref>
        <Link>Login</Link>
      </NextLink>
      </Box>
    </Box>
    </Box>
      </Box> 
    </Stack>
  )
}


/*

<Flex
        flexDirection='column'
        maxWidth='700px'
        >
          <Flex
          flexDirection="row"
          w="700"
          pt={4}
          justify="space-between"
          >
            <DarkModeSwitch />
            <Text>Home</Text>
          </Flex>
          <Heading
          as="h1"
          size="2xl"
          mt={4}
          >Hello World!</Heading>
          <Text my={4}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nisi unde incidunt ullam expedita rem? Nesciunt ut error repellendus. Magni adipisci eos placeat perferendis libero earum necessitatibus ad incidunt laborum?</Text>
      </Flex>

*/
