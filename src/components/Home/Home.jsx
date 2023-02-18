import React from 'react'
import { Box, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import './Home.css'
import vg from '../../assets/images/bg.png'
const Home = () => {
  return (
    <section className='home'>
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height='100%'
          justifyContent={['center', 'space-between']}
          alignItems='center'
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={'center'} textAlign={'center'}>
            <Text bgClip='text' fontSize={['4xl', '5xl']} marginTop={['20', 0]} fontWeight='extrabold' bgGradient='linear(to-r, green.300, blue.500)'>Learn from the Experts</Text>
            <Text bgClip='text' fontSize={['lg', '2xl']} fontWeight='bold' bgGradient='linear(to-r, green.300, blue.500)' >Find Valuable content at Reasonable Price.</Text>
            <Link to='/courses'>
              <Box
                as='button'
                p={3}
                marginTop={4}
                color='white'
                fontSize={['16', '18']}
                fontWeight='bold'
                borderRadius='md'
                bgGradient='linear(to-r, green.300, blue.500)'
                _hover={{
                  bgGradient: 'linear(to-r, blue.500, green.300)',
                }}
              >
                Explore now
              </Box>
            </Link>
          </VStack>

          <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit='contain' borderRadius={40}/>
        </Stack>
      </div>

    </section>
  )
}

export default Home