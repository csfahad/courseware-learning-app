import { Box, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, HStack, Text, useDisclosure, VStack } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import { RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill } from "react-icons/ri"
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button colorScheme={'green'} variant={'ghost'}>{title}</Button>
  </Link>
);

const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };

  return (
    <>
      <ColorModeSwitcher />
      {/* <Button colorScheme={'green'} width='12' height='12' rounded='full' position={'fixed'} top='6' left='6'>
      <RiMenu5Fill />
    </Button> */}
      <Box
        zIndex={'overlay'}
        onClick={onOpen}
        as='button'
        position={'absolute'}
        p={3}
        color='white'
        top='6'
        left='6'
        fontSize={'20'}
        borderRadius='full'
        bgGradient='linear(to-r, green.300, blue.500)'
        _hover={{
          bgGradient: 'linear(to-r, blue.500, green.300)',
        }}
      >
        <RiMenu5Fill />
      </Box>

      <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader onClick={onClose}>
            <Link to="/">
              <Text bgClip='text' mt={4} textAlign={'center'} fontSize={['2xl', '3xl']} fontWeight='extrabold' bgGradient='linear(to-r, green.300, blue.500)'>Courseware</Text>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/courses"
                title="Browse All Courses"
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request a Course"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />

              <HStack justifyContent={'space-evenly'} position='absolute' bottom={'2rem'} width='80%'>
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link to='/profile'>
                          <Button colorScheme={'green'} marginRight={5} onClick={onClose}>
                            Profile
                          </Button>
                        </Link>
                        <Button colorScheme={'blue'} marginLeft={5} onClick={logoutHandler}>
                          <RiLogoutBoxLine />
                          Logout
                        </Button>
                      </HStack>
                      {user && user.role === 'admin' && <Link to='/admin/dashboard'>
                        <Button colorScheme={'blue'} variant={'solid'} onClick={onClose}>
                          <RiDashboardFill style={{ margin: '4px' }} />Dashboard
                        </Button>
                      </Link>}
                    </VStack>
                  </>) : (
                  <>

                    <Link to='/login'>
                      <Button colorScheme={'blue'} onClick={onClose}>
                        Login
                      </Button>
                    </Link>

                    <p>|</p>

                    <Link to='/register'>
                      <Button colorScheme={'green'} onClick={onClose}>
                        Sign up
                      </Button>
                    </Link>
                  </>)}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Header