import {
    Button,
    Container,
    Grid,
    Heading,
    Image,
    Input,
    Select,
    VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cursor from '../../../assets/images/cursor.png';
import { createCourse } from '../../../redux/actions/admin';
import { fileUploadCss } from '../../Auth/Register';
import Sidebar from '../Sidebar';
import toast from 'react-hot-toast';

const CreateCourse = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const dispatch = useDispatch();
    const { loading, error, message } = useSelector(state => state.admin);

    const categories = [
        'Web development',
        'Artificial Intellegence',
        'Data Structure & Algorithm',
        'App Development',
        'Data Science',
        'Game Development',
    ];

    const changeImageHandler = e => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        };
    };

    const submitHandler = e => {
        e.preventDefault();
        const myForm = new FormData();
        myForm.append('title', title);
        myForm.append('description', description);
        myForm.append('category', category);
        myForm.append('createdBy', createdBy);
        myForm.append('file', image);
        dispatch(createCourse(myForm));
    };

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: 'clearError' });
        }

        if (message) {
            toast.success(message);
            dispatch({ type: 'clearMessage' });
            setTitle('');
            setDescription('');
            setCreatedBy('');
            setCategory('');
            setImage('');
            setImagePrev('');
        }
    }, [dispatch, error, message]);

    return (
        <Grid
            css={{
                cursor: `url(${cursor}), default`,
            }}
            minH={'100vh'}
            templateColumns={['1fr', '1fr 5fr']}
        >
            <Sidebar />
            <Container py="4">
                <form onSubmit={submitHandler}>
                    <Heading
                        children="Create a Course"
                        my={['8','16']}
                        textAlign={'center'}
                    />

                    <VStack m="auto" spacing={'8'}>
                        <Input
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Title"
                            type={'text'}
                            focusBorderColor="green.400"
                        />{' '}
                        <Input
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder="Description"
                            type={'text'}
                            focusBorderColor="green.400"
                        />
                        <Input
                            value={createdBy}
                            onChange={e => setCreatedBy(e.target.value)}
                            placeholder="Creator Name"
                            type={'text'}
                            focusBorderColor="green.400"
                        />
                        <Select
                            focusBorderColor="green.400"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                        >
                            <option value="">Category</option>

                            {categories?.map(item => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </Select>
                        <Input
                            accept="image/*"
                            required
                            type={'file'}
                            focusBorderColor="green.400"
                            css={{
                                '&::file-selector-button': {
                                    ...fileUploadCss,
                                    color: '#1c6cb7',
                                },
                            }}
                            onChange={changeImageHandler}
                        />
                        {imagePrev && (
                            <Image src={imagePrev} boxSize="64" objectFit={'contain'} />
                        )}
                        <Button
                            isLoading={loading}
                            w="full"
                            colorScheme={'green'}
                            type="submit"
                        >
                            Create
                        </Button>
                    </VStack>
                </form>
            </Container>

            {/* <Sidebar /> */}
        </Grid>
    );
};

export default CreateCourse;
