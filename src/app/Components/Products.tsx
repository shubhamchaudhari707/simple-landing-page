import React from 'react';
import { Box, Flex, Heading, Text, SimpleGrid, Button } from '@chakra-ui/react';
import { Product, products, cardData } from '../../lib/dummy';

const ProductList: React.FC = () => {

  // const data: Product[] = products;

  return (


    <Box p={5}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} spacing={10}>
        {cardData.map((card) => (
          <Box
            key={card.title}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: 'scale(1.05)' }}
            bg="white"
            shadow="md"
          >
            <Box p={4} bg="blue.300" color="white">
              <Heading size="md">{card.title}</Heading>
            </Box>
            <Box p={4}>
              <Text>{card.description}</Text>
            </Box>
            <Box p={4} textAlign="center" bg="gray.100">
              <Button colorScheme="gray">Learn More</Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>




  );
};

export default ProductList;











