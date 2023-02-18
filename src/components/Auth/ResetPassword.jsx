import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';

const ResetPassword = () => {
    const [password, setPassword] = useState('');

    const params = useParams();
    const navigate = useNavigate();

    const { loading, message, error } = useSelector(state => state.profile);

    const dispatch = useDispatch();
    const submitHandler = e => {
        e.preventDefault();
        dispatch(resetPassword(params.token, password));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            navigate('/login');
        }
    }, [dispatch, error, message]);

    return (
        <Container py={'8'} h="90vh">
            <form onSubmit={submitHandler}>
                <Heading
                    children="Reset Password"
                    my="16"
                    textAlign={'center'}
                />

                <VStack spacing={'8'}>
                <Box style={{ width: '100%' }}>
                        <FormLabel htmlFor="password" children="Set New Password*" />
                        <Input
                            required
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="New Password"
                            type={'password'}
                            focusBorderColor="green.500"
                        />
                    </Box>

                    <Button
                        isLoading={loading}
                        type="submit"
                        colorScheme="green"
                    >
                        Reset Password
                    </Button>
                </VStack>
            </form>
        </Container>
    );
};

export default ResetPassword;
