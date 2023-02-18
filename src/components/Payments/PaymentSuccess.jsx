import {
    Box,
    Button,
    Container,
    Heading,
    Text,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
    const reference = useSearchParams()[0].get('reference');

    return (
        <Container h="90vh" p="16">
            <Heading my="8" textAlign={'center'}>
                Subscribed!
            </Heading>

            <VStack boxShadow={'lg'} pb="16" alignItems={'center'} borderRadius="lg">
                <Box
                    w="full"
                    bg="blue.300"
                    p="4"
                    css={{ borderRadius: '8px 8px 0 0' }}
                >
                    <Text color={'black'} textAlign={'center'}>Payment Success</Text>
                </Box>

                <Box p="4">
                    <VStack textAlign={'center'} px="8" mt="4" spacing={'8'} fontSize={'16'}>
                        <Text>
                            Congratulation You're a pro member now. You have access to all premium
                            contents.
                        </Text>

                        <Heading size={'4xl'}>
                            <RiCheckboxCircleFill color={'#1FAA59'} />
                        </Heading>
                    </VStack>
                </Box>

                <Link to="/profile">
                    <Button colorScheme={'green'} variant={'solid'}>Go to Profile</Button>
                </Link>
                <Box>
                    <Heading marginTop={'4'} size={'xs'}>Transaction id: {reference}</Heading>
                </Box>
            </VStack>
        </Container>
    );
};

export default PaymentSuccess;
