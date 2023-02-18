import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '../../redux/actions/profile';

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = e => {
        e.preventDefault();
        dispatch(changePassword(oldPassword, newPassword));
    };

    const { loading, message, error } = useSelector(state => state.profile);

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }
        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            navigate('/profile')
        }
    }, [dispatch, error, message]);

    return (
        <Container py="8" minH={'90vh'}>
            <form onSubmit={submitHandler}>
                <Heading
                    children="Change Password"
                    my="16"
                    textAlign={'center'}
                />

                <VStack spacing={'8'}>
                    <Input
                        required
                        value={oldPassword}
                        onChange={e => setOldPassword(e.target.value)}
                        placeholder="Enter old Password"
                        type={'password'}
                        focusBorderColor="green.500"
                    />

                    <Input
                        required
                        value={newPassword}
                        onChange={e => setNewPassword(e.target.value)}
                        placeholder="Set new Password"
                        type={'password'}
                        focusBorderColor="green.500"
                    />

                    <Button
                        isLoading={loading}
                        colorScheme={'green'}
                        type="submit"
                    >
                        Change
                    </Button>
                </VStack>
            </form>
        </Container>
    );
};

export default ChangePassword;
