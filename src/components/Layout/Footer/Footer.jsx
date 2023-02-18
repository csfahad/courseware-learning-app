import React from 'react'
import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import {
    TiSocialYoutubeCircular,
    TiSocialInstagramCircular,
} from 'react-icons/ti';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useLocation } from 'react-router-dom';

const Footer = () => {

    const { pathname } = useLocation();
    // you can check a more conditions here
    if (pathname === "/register") return null;
    if (pathname === "/login") return null;
    if (pathname === "/forgetpassword") return null;
    if (pathname === "/changepassword") return null;
    if (pathname === "/updateprofile") return null;

    return (
        <Box padding={'4'} bg="green.200" minH={'10vh'}>
            <Stack direction={'column'}>
                <VStack alignItems={'center'} width="full">
                    <Text bgClip='text' textAlign={'center'} fontSize={['2xl', '3xl']} fontWeight='extrabold' bgGradient='linear(to-r, green.300, blue.500)'>Courseware</Text>
                    <Heading
                        fontFamily={'body'}
                        fontSize={"sm"}
                        letterSpacing={"widest"}
                        children="© 2023 All rights reserved."
                        color={'black'}
                    />
                </VStack>

                <HStack
                    spacing={['8', '10']}
                    justifyContent="center"
                    color={'blue.500'}
                    fontSize="30"
                >
                    <a href="https://github.com/csfahad" target={'blank'}>
                        <FaGithub />
                    </a>
                    <a href="https://twitter.com/fahad_cs" target={'blank'}>
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com/in/cs-fahad-58b419257/" target={'blank'}>
                        <FaLinkedin />
                    </a>
                </HStack>
            </Stack>
        </Box>
    )
}

export default Footer