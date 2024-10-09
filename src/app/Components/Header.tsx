"use client"
import { Flex } from '@chakra-ui/react';
import { Box, Text, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

const Navbar = () => {


    return (
        <>
            <Box position="sticky" top="0" width="100%" bg="white" p={4} zIndex="10" boxShadow="sm">
                <Flex
                    alignItems="center"
                    justifyContent={{ base: 'center', md: 'space-between' }}
                    direction={{ base: 'column', md: 'row' }}
                    gap={{ base: 4, md: 0 }}
                    position="relative"
                >
                    <Box position={{ base: 'static', md: 'absolute' }} left={{ md: '20px' }} textAlign="center">
                        <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} color="orange.400">
                            nCompass <span style={{ color: "green" }}>Technologies</span>
                        </Text>
                    </Box>

                    <Box marginLeft="auto" mt={{ base: 4, md: 0 }}>
                        <InputGroup>
                            <InputLeftElement>
                                <SearchIcon color="gray.400" />
                            </InputLeftElement>
                            <Input
                                placeholder="Search..."
                                size="md"
                                width={{ base: '100%', md: '250px' }}
                                variant="outline"
                                borderColor="gray.300"
                                _focus={{ borderColor: "blue.400" }}
                            />
                        </InputGroup>
                    </Box>
                </Flex>
            </Box>

            <div style={{ display: 'flex', marginLeft: '40px' }}>

                <div
                    style={{
                        padding: '20px',
                        flex: 1,
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >



                    <h1 style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        marginRight: '200px',
                    }}
                    >
                        About nCompass
                    </h1>

                    <div style={{
                        maxWidth: '700px',
                        textAlign: 'justify',
                        marginTop: '20px',
                    }}
                    >
                        <p style={{ marginBottom: '30px' }}>
                            Cost effective AI model inference at scale

                        </p>
                        <img
                            src="https://www.ycombinator.com/launches/KaC-ncompass-technologies-low-latency-deployment-of-ai-models-made-easy/upvote_embed.svg"
                            alt="Launch YC"
                            style={{ width: '300px', height: '50px', marginRight: '5px' }}
                        />


                        <p style={{ marginTop: "30px" }}>
                            At nCompass, we’re building IP that can reduce the costs of serving AI models at scale by 50%. We enable a single GPU to handle up to 4x more requests/s without degrading quality-of-service.
                        </p>
                        <p style={{ marginTop: '40px' }}>
                            Leading-edge serving systems like vLLM showcase impressive quality of service (QoS) with 1-20 requests per second. However, as the load increases, especially beyond this range, the response times for large language model (LLM) inference on a single GPU can rise significantly. The common approach to mitigate this issue involves scaling up the number of GPUs, which can be costly.
                        </p>
                        <p>
                            Our technology at nCompass addresses this challenge by optimizing GPU usage, enabling cost-efficient and scalable AI model deployments.
                        </p>
                    </div>
                    <Box
                        maxW="md"
                        borderWidth="1px"
                        borderRadius="5g"
                        overflow="hidden"
                        p={4}
                        m={10}
                        bg="white"
                    >
                        <h1 style={{ fontWeight: 'bold' }}>Reduce AI GPU Infrastructure Bills by 50%</h1>
                        Our hardware aware request scheduler and Kubernetes autoscaler enables users to
                        serve 100 requests/s without compromising QoS on a single GPU.
                    </Box>

                    <img
                        src="https://mintlify.s3-us-west-1.amazonaws.com/ncompasstechnologies/gpu_cost_saving-1.png"
                        alt="Launch YC"
                        style={{ width: '650px', height: '350px', marginRight: '5px' }}
                    />
                    <Box
                        maxW="md"
                        borderWidth="1px"
                        borderRadius="5g"
                        overflow="hidden"
                        p={4}
                        m={10}
                        bg="white"
                    >
                        <h1 style={{ fontWeight: 'bold', color: 'grey' }}>Improve AI model responsiveness by up to 18x </h1>
                        We maintain a <span style={{ color: 'black', fontWeight: 'bold' }}>TTFT of 1s on a single GPU</span> while serving up <span>  100 requests/s</span>and improve performance compared to vLLM by up to 18x.

                    </Box>
                    <img
                        src="https://mintlify.s3-us-west-1.amazonaws.com/ncompasstechnologies/ttft_improvements-1.png"
                        alt="Launch YC"
                        style={{ width: '650px', height: '350px', marginRight: '5px' }}
                    />


                </div>


            </div>




        </>
    );
};

export default Navbar;
