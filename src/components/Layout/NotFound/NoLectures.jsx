import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiErrorWarningFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const NoLectures = () => {
    return (
        <Container h="90vh">
            <VStack justifyContent={'center'} h="full" spacing={'4'} textAlign={'center'}>
                <RiErrorWarningFill size={'5rem'}/>
                <Heading>Lectures not found</Heading>
                <Link to="/">
                    <Button colorScheme={'green'} variant={'solid'}>Go to home</Button>
                </Link>
            </VStack>
        </Container>
    );
};

export default NoLectures;
