"use client";
import { useEffect, useState } from 'react';
import { Box, Heading, Text, Flex, Spinner, FormControl, FormLabel, Input, Textarea, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { PostsData, fetchPost } from '../api/routes';
import { Post } from '../api/types';
import LoadingSpinner from './Loader';

const HappyClientsAndPosts = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [loadingPosts, setLoadingPosts] = useState<boolean>(true);
    const [errorPosts, setErrorPosts] = useState<string | null>(null);

    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');

    const [loadingPost, setLoadingPost] = useState<boolean>(false);

    const [successMessage, setSuccessMessage] = useState<string>('');

    const [currentPage, setCurrentPage] = useState<number>(1);
    const postsPerPage = 5;



    // Fetch posts
    useEffect(() => {
        const loadPosts = async () => {
            try {
                const postsData = await fetchPost();
                setPosts(postsData);
            } catch (error) {
                setErrorPosts("Error fetching posts");
            } finally {
                setLoadingPosts(false);
            }
        };

        loadPosts();
    }, []);

    // Handle post submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoadingPost(true);

        const postData: Post = {
            title,
            body,
            userId: 1,
            id: 0
        };

        try {
            const data = await PostsData(postData);
            setSuccessMessage(`Post created with ID: ${data.id}`);
            setTitle('');
            setBody('');
            setPosts((prevPosts) => [...prevPosts, { ...data, userId: postData.userId }]);
        } catch (error) {
            console.error(error);
            setSuccessMessage('Error creating post');
        } finally {
            setLoadingPost(false);
        }
    };


    // Pagination Logic
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(posts.length / postsPerPage);



    if (loadingPosts) {
        return (
          <LoadingSpinner/>
        );
      }

    if (errorPosts) {
        return (
            <Box textAlign="center" p={5}>
                <Text color="red.500">{errorPosts}</Text>
            </Box>
        );
    }

    return (
        <Flex p={5}>
            {/* Left Side: Create Post */}
            <Box flex="1" mr={5}>
                <Heading as="h3" size="lg" mb={4} color="teal.600">
                    Create a Post
                </Heading>
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired mb={4}>
                        <FormLabel>Title</FormLabel>
                        <Input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </FormControl>
                    <FormControl isRequired mb={4}>
                        <FormLabel>Body</FormLabel>
                        <Textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="teal" isLoading={loadingPost}>
                        Submit
                    </Button>
                </form>
                {successMessage && (
                    <Text mt={4} color={successMessage.startsWith('Error') ? 'red.500' : 'green.500'}>
                        {successMessage}
                    </Text>
                )}
            </Box>

            {/* Right Side: Posts Table */}
            <Box flex="2">
                <Heading as="h3" size="lg" mb={4} textAlign="center" color="teal.600">
                    Posts
                </Heading>
                <Table variant="simple" mb={5}>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Title</Th>
                            <Th>Description</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {currentPosts.map((post) => (
                            <Tr key={post.id}>
                                <Td>{post.id}</Td>
                                <Td>{post.title.length > 50 ? `${post.title.substring(0, 50)}...` : post.title}</Td>
                                <Td>{post.body.length > 50 ? `${post.body.substring(0, 50)}...` : post.body}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>

                {/* Pagination Controls */}
                <Flex justify="space-between" mt={4}>
                    <Button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        isDisabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        isDisabled={currentPage === totalPages}
                    >
                        Next
                    </Button>
                </Flex>

            </Box>
        </Flex>
    );
};

export default HappyClientsAndPosts;
