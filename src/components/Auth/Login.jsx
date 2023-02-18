import {
    Box,
    Button,
    Container,
    FormLabel,
    Heading,
    Input,
    VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../redux/actions/user';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        dispatch(login(email, password));
        navigate('/profile')
    };


    return (
        <Container h={'95vh'} >
            <VStack h={'full'} justifyContent="center" spacing={['8', '16']} >
                <Heading children={'Login to your account'} marginTop={'-150'} />

                <form onSubmit={submitHandler} style={{ width: '100%' }} >
                    <Box my={'4'}>
                        <FormLabel htmlFor="email" children="Email*" />
                        <Input
                            required
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Enter your Email"
                            type={'email'}
                            focusBorderColor="green.500"
                        />
                    </Box>

                    <Box my={'4'}>
                        <FormLabel htmlFor="password" children="Password*" />
                        <Input
                            required
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="password"
                            type={'password'}
                            focusBorderColor="green.500"
                        />
                    </Box>

                    <Box textAlign={'end'}>
                        <Link to="/forgetpassword">
                            <Button fontSize={'sm'} variant="link" >
                                Forget Password?
                            </Button>
                        </Link>
                    </Box>

                    <Box textAlign={'center'}>
                        <Button my="4" colorScheme={'green'} type="submit" >
                            Login
                        </Button>
                    </Box>

                    <Box my="4" textAlign={'center'}>
                        New User?{' '}
                        <Link to="/register">
                            <Button colorScheme={'blue'} variant="link">
                                Sign up
                            </Button>{' '}
                            here
                        </Link>
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Login