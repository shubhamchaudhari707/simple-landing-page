import React from 'react';
import { Box, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react"


const Contact = () => {
    return (
        <>


            <Box display="flex" alignItems="center" justifyContent="center" height="100vh" bg="#F6F5F2">
                <Box className="contact-container" style={{
                    backgroundColor: "white",
                    padding: "40px",
                    borderRadius: "8px",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
                    maxWidth: "400px",
                    width: "100%"
                }} width={{ base: "90%", sm: "400px" }}>
                    <Heading size="lg" mb={4} textAlign="center">Contact Us</Heading>
                    <FormControl mb={4}>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="Enter your first name" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Enter your last name" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Enter your email" />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Message</FormLabel>
                        <Textarea placeholder="Your message here" />
                    </FormControl>
                    <Button colorScheme="blue" width="full">Send</Button>
                </Box>
            </Box>

        </>
    );
}

export default Contact;
