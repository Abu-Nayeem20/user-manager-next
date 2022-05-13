import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react';
import Link from 'next/link';
import NextLink from 'next/link';
import React, { useState } from 'react';
import DarkModeSwitch from './components/DarkModeSwitch';

const signup = () => {

    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show)

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
                <NextLink href='/signin' passHref>
                  <Link>Sign In</Link>
                </NextLink>
                </MenuItem>
                <MenuItem>
                <NextLink href='/signup' passHref>
                  <Link>Sign Up</Link>
                </NextLink>
                </MenuItem>
              </MenuList>
            </Menu>

          </Flex>
            <Box w="400px" borderWidth='1px' borderRadius='lg' overflow='hidden' p={4} bg="blue.800">
            <Heading
            as="h2"
            size="lg"
            align="center"
            color="teal.300"
            >
                Sign Up Now!
            </Heading>
            <Box>
            <InputGroup size='md'>
                <Input
                    pr='4.5rem'
                    type={show ? 'text' : 'password'}
                    placeholder='Enter password'
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
                </InputGroup>
            </Box>
            </Box>
        </Stack>
        
    );
};

export default signup;