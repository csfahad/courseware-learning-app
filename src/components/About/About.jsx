import {
    Avatar,
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiSecurePaymentFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import termsAndCondition from '../../assets/docs/termsAndCondition';

const Founder = () => (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
        <VStack>
            <Avatar
                src=""
                boxSize={['40', '48']}
                border={'1px solid green'}
            />
            <Text children="Founder" opacity={0.7} />
        </VStack>

        <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
            <Heading children="Cs Fahad" size={['md', 'xl']} />
            <Text
                textAlign={['center', 'left']}
                children={`Hi, I am a full-stack developer and a teacher.
        Our mission is to provide quality content at reasonable price.`}
            />
        </VStack>
    </Stack>
);


const TandC = ({ termsAndCondition }) => (
    <Box>
        <Heading
            size={'md'}
            children="Terms & Conditions:"
            textAlign={['center', 'left']}
            my="4"
        />

        <Box h="sm" p="4" overflowY={'scroll'}>
            <Text
                fontFamily={'heading'}
                letterSpacing={'widest'}
                textAlign={['center', 'left']}
            >
                {termsAndCondition}
            </Text>
            <Heading textAlign={'center'}
                my="4"
                size={'xs'}
                children="Refund only applicable for cancellation within 7 days."
            />
        </Box>
    </Box>
);
const About = () => {
    return (
        <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
            <Heading children="About us" textAlign={['center', 'left']} />
            <Founder />
            <Stack m="8" direction={['column', 'row']} alignItems="center">
                <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
                    We are a video streaming platform with some premium courses available
                    only for premium users.
                </Text>

                <Link to="/subscribe">
                    <Button variant={'solid'} colorScheme="green">
                        Checkout Our Plans
                    </Button>
                </Link>
            </Stack>

            {/* <VideoPlayer /> */}

            <TandC termsAndCondition={termsAndCondition} />

            <HStack my="4" p={'4'} justifyContent={'center'} textAlign={'center'}>
                <RiSecurePaymentFill />
                <Heading
                    size={'sm'}
                    fontFamily="sans-serif"
                    textTransform={'uppercase'}
                    children={'Payment is secured by Razorpay'}
                />
            </HStack>
        </Container>
    );
};

export default About;
