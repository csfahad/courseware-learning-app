import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgetPassword } from '../../redux/actions/profile';

const ForgetPassword = () => {
    const [email, setEmail] = useState('');

    const { loading, message, error } = useSelector(state => state.profile);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = e => {
        e.preventDefault();
        dispatch(forgetPassword(email));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            navigate('/login')
        }
    }, [dispatch, error, message]);

    return (
        <Container py={'8'} h="90vh">
            <form onSubmit={submitHandler}>
                <Heading
                    children="Forget Password"
                    my="16"
                    textAlign={'center'}
                />

                <VStack spacing={'8'} >
                <Box style={{ width: '100%' }}>
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

                    <Button
                        isLoading={loading}
                        type="submit"
                        colorScheme="green"
                    >
                        Send Reset Link
                    </Button>
                </VStack>
            </form>
        </Container>
    );
};

export default ForgetPassword;
