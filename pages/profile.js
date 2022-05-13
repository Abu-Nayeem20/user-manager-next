import { HamburgerIcon } from '@chakra-ui/icons';
import { Flex, Menu, MenuButton, MenuItem, MenuList, Stack } from '@chakra-ui/react';
import React from 'react';
import Link from 'next/link';
import NextLink from 'next/link';
import DarkModeSwitch from './components/DarkModeSwitch';

const profile = () => {
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
        </Stack>
    );
};

export default profile;