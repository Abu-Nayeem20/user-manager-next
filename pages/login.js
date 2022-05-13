import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Image, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import NextLink from 'next/link';
import DarkModeSwitch from './components/DarkModeSwitch';
import initializeAuthentication from './Firebase/firebase.init';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState } from 'react';

initializeAuthentication();


const login = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    
    const auth = getAuth();

    // SIGN  IN WITH GOOGLE
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            setUser(user)
            console.log(user)
        })
        
        .catch((error) => {
            setError(error.message);
        })
    };

    return (
        <Stack
        as="main"
        align="center"
        >
         <Flex
          flexDirection="row"
          w="400px"
          pt={4}
          justify="space-between"
          mb={8}
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
                <NextLink href='/' passHref>
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
            <Box w="400px" borderWidth='1px' borderRadius='lg' overflow='hidden' py={8} px={6} bg="blue.800">
            <Heading
            as="h2"
            size="lg"
            align="center"
            color="teal.300"
            >
                LogIn Now!
            </Heading>
            <Box my={8}>
            <Box
            mt={6}
            align="center"
            >
                <Heading
                as="h4"
                size="md"
                color="teal.300"
                >Login with Google!</Heading>
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    mt={8}
                    onClick={signInUsingGoogle}
                    cursor='pointer'
                    src="https://i.ibb.co/bJMC3Sw/google.png"
                    alt='Image'
                    />
            </Box>
            </Box>
            </Box>
        </Stack>
        
    );
};

export default login;