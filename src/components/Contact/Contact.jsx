import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { contactUs } from '../../redux/actions/other';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const dispatch = useDispatch();

    const {
        loading,
        error,
        message: stateMessage,
    } = useSelector(state => state.other);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(contactUs(name, email, message));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (stateMessage) {
            toast.success(stateMessage);
            dispatch({ type: 'clearMessage' });
        }
    }, [dispatch, error, stateMessage]);

    return (
        <Container h="90vh">
            <VStack h="full" justifyContent={'center'} spacing="16">
                <Heading children="Contact us" />

                <form onSubmit={submitHandler} style={{ width: '100%' }}>
                    <Box>
                        <FormLabel htmlFor="name" children="Name*" />
                        <Input
                            required
                            id="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Enter your name"
                            type={'text'}
                            focusBorderColor="green.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="email" children="Email Address*" />
                        <Input
                            required
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            type={'email'}
                            focusBorderColor="green.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="message" children="Message*" />
                        <Textarea
                            required
                            id="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder="Type your message here.."
                            focusBorderColor="green.500"
                        />
                    </Box>

                    <Box textAlign={'center'}>
                        <Button
                            isLoading={loading}
                            my="4"
                            colorScheme={'green'}
                            type="submit"
                        >
                            Send Mail
                        </Button>
                    </Box>

                    <Box my="4" textAlign={'center'}>
                        Request for a course?{' '}
                        <Link to="/request">
                            <Button colorScheme={'blue'} variant="link">
                                Click
                            </Button>{' '}
                            here
                        </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    );
};

export default Contact;
