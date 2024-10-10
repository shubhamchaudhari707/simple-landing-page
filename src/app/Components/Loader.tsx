import React from 'react';
import { Box, Spinner } from '@chakra-ui/react';


const LoadingSpinner = () => {
  return (
    <Box textAlign="center" p={5}>
      <Spinner size={"xl"} />
    </Box>
  );
};

export default LoadingSpinner;
