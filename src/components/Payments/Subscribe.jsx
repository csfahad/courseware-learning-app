import {
    Box,
    Button,
    Container,
    Heading,
    Text,
    VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buySubscription } from '../../redux/actions/user';
import { server } from '../../redux/store';
import toast from 'react-hot-toast';
import logo from '../../assets/images/bg.png';

const Subscribe = ({ user }) => {
    const dispatch = useDispatch();
    const [key, setKey] = useState('');

    const { loading, error, subscriptionId } = useSelector(
        state => state.subscription
    );
    const { error: courseError } = useSelector(state => state.course);

    const subscribeHandler = async () => {
        const {
            data: { key },
        } = await axios.get(`${server}/razorpaykey`);

        setKey(key);
        dispatch(buySubscription());
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (courseError) {
            toast.error(courseError);
            dispatch({ type: 'clearError' });
        }
        if (subscriptionId) {
            const openPopUp = () => {
                const options = {
                    key,
                    name: 'Courseware',
                    description: 'Get access to all premium contents',
                    image: logo,
                    subscription_id: subscriptionId,
                    callback_url: `${server}/paymentverification`,
                    prefill: {
                        name: user.name,
                        email: user.email,
                        contact: '',
                    },
                    notes: {
                        address: 'Cs Fahad, 123 Lane, New Delhi, Pin - 111111 India',
                    },
                    theme: {
                        color: '#38CC77',
                    },
                };

                const razor = new window.Razorpay(options);
                razor.open();
            };
            openPopUp();
        }
    }, [
        dispatch,
        error,
        courseError,
        user.name,
        user.email,
        key,
        subscriptionId,
    ]);

    return (
        <Container h="90vh" p="16">
            <Heading children="Subscribe our Plans" my="8" textAlign={'center'} />

            <VStack
                boxShadow={'lg'}
                alignItems="stretch"
                borderRadius={'lg'}
                spacing="0"
            >
                <Box bg="blue.300" p={'4'} css={{ borderRadius: '8px 8px 0 0' }}>
                    <Text color={'black'} children={`Pro Pack - ₹299.00`} textAlign={'center'}/>
                </Box>
                <Box p="4">
                    <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
                        <Text children={`Join Pro pack and get access to all contents.`} />
                        <Heading size="md" children={'₹299 Only'} />
                    </VStack>

                    <Button
                        my="8"
                        w="full"
                        colorScheme={'green'}
                        onClick={subscribeHandler}
                        isLoading={loading}
                    >
                        Buy Now
                    </Button>
                </Box>

                <Box bg="blue.300" p="4" css={{ borderRadius: '0 0 8px 8px' }} textAlign={'center'}>
                    <Heading
                        color={'black'}
                        textTransform="uppercase"
                        size="sm"
                        children={'*100% refund at cancellation'}
                    />

                    <Text
                        fontSize={'xs'}
                        color="black"
                        children={'*Terms & Conditions Apply'}
                    />
                </Box>
            </VStack>
        </Container>
    );
};

export default Subscribe;
