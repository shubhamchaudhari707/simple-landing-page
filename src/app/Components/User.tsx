
"use client";

import { useEffect, useState } from 'react';
import { Box, Heading, Text, Flex, Spinner } from '@chakra-ui/react';
import { User } from '../api/types';
import { fetchUsers } from '../api/routes';
import LoadingSpinner from './Loader';

const HappyClients = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(true);
  const [errorUsers, setErrorUsers] = useState<string | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (error) {
        setErrorUsers("Error fetching users");
      } finally {
        setLoadingUsers(false);
      }
    };

    loadUsers();
  }, []);

  if (loadingUsers) {
    return (
      <LoadingSpinner/>
    );
  }

  if (errorUsers) {
    return (
      <Box textAlign="center" p={5}>
        <Text color="red.500">{errorUsers}</Text>
      </Box>
    );
  }

  return (
    <Box p={5} mt={5} borderTop="2px solid black" borderBottom="2px solid black" bg="#fcf9f9">
      <Heading as="h2" size="xl" mb={6} textAlign="center" color="green">
        Happy Clients
      </Heading>
      <Flex wrap="wrap" justify="space-between">
        {users && users.map((user) => (
          <Box
            key={user.id}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p={5}
            boxShadow="md"
            textAlign="center"
            width={{ base: "100%", sm: "48%", md: "30%" }} 
            mb={5}
            transition="transform 0.3s, background-color 0.3s"
            _hover={{
              transform: 'scale(1.05)',
              backgroundColor: 'teal.50', 
            }}
          >
            <Text fontSize="lg" fontWeight="bold" color="teal.800">
              {user.name}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Username: {user.username}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Email: {user.email}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Address: {user.address.street}, {user.address.city}
            </Text>
            <Text fontSize="sm" color="gray.600">
              Phone: {user.phone}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default HappyClients;
