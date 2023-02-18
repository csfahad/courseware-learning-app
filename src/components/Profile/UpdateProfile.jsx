import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';

const UpdateProfile = ({ user }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submitHandler = async e => {
        e.preventDefault();
        await dispatch(updateProfile(name, email));
        dispatch(loadUser());
        navigate('/profile');
    };

    const { loading } = useSelector(state => state.profile);
    return (
        <Container py="8" minH={'90vh'}>
            <form onSubmit={submitHandler}>
                <Heading
                    children="Update Profile"
                    my="16"
                    textAlign={'center'}
                />

                <VStack spacing={'8'}>
                    <Input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Name"
                        type={'text'}
                        focusBorderColor="green.500"
                    />{' '}
                    <Input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        type={'email'}
                        focusBorderColor="green.500"
                    />
                    <Button
                        isLoading={loading}
                        colorScheme={'green'}
                        type="submit"
                    >
                        Update
                    </Button>
                </VStack>
            </form>
        </Container>
    );
};

export default UpdateProfile;
