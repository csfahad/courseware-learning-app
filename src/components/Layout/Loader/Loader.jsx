import { Spinner, VStack } from '@chakra-ui/react';
import React from 'react';

const Loader = ({ color = 'green.500' }) => {
    return (
        <VStack h="100vh" justifyContent={'center'}>
            <div style={{ transform: 'scale(4)' }}>
                <Spinner
                    thickness="2px"
                    speed="0.45s"
                    emptyColor="transparent"
                    color={color}
                    size="xs"
                />
            </div>
        </VStack>
    );
};

export default Loader;
