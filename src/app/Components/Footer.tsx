"use client";
import { Box, Flex, Text, Divider, IconButton, Link } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';


const Footer = () => {
    return (
        <Box as="footer" bg="gray.50" py={8} mt={8} boxShadow="md">
            <Divider borderColor="gray.200" mb={4} />

            <Flex
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
                gap={4}
            >
                <Text fontSize="lg" fontWeight="bold" color="gray.800">
                    Connect with Us
                </Text>
                
                <Flex gap={4}>
                    <Link href="https://facebook.com" isExternal>
                        <IconButton 
                            icon={<FaFacebook />} 
                            aria-label="Facebook" 
                            variant="outline" 
                            colorScheme="blue" 
                            size="lg" 
                            borderRadius="full" 
                        />
                    </Link>

                    <Link href="https://twitter.com" isExternal>
                        <IconButton 
                            icon={<FaTwitter />} 
                            aria-label="Twitter" 
                            variant="outline" 
                            colorScheme="blue" 
                            size="lg" 
                            borderRadius="full" 
                        />
                    </Link>

                    <Link href="https://linkedin.com" isExternal>
                        <IconButton 
                            icon={<FaLinkedin />} 
                            aria-label="LinkedIn" 
                            variant="outline" 
                            colorScheme="blue" 
                            size="lg" 
                            borderRadius="full" 
                        />
                    </Link>
                </Flex>

                <Text fontSize="sm" color="gray.500" mt={4}>
                    &copy; {new Date().getFullYear()} nCompass Technologies. All rights reserved.
                </Text>
            </Flex>
        </Box>
    );
};

export default Footer;
