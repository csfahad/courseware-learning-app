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
import { courseRequest } from '../../redux/actions/other';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

const Request = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [course, setCourse] = useState('');

    const dispatch = useDispatch();
    const {
        loading,
        error,
        message: stateMessage,
    } = useSelector(state => state.other);

    const submitHandler = e => {
        e.preventDefault();
        dispatch(courseRequest(name, email, course));
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
                <Heading children="Request New Course" />

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
                        <FormLabel htmlFor="course" children="Course*" />
                        <Textarea
                            required
                            id="course"
                            value={course}
                            onChange={e => setCourse(e.target.value)}
                            placeholder="Explain about the course you want...."
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
                        See available Courses!{' '}
                        <Link to="/courses">
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
export default Request;
