import { Container, VStack, Box, Text, Heading, Button, IconButton, Image, Link, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box boxSize="150px">
          <Image borderRadius="full" src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MXwxfHNlYXJjaHwxfHxwb3J0cmFpdHxlbnwwfHx8fDE3MTU4NjQ3NDd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Picture" />
        </Box>
        <Heading as="h1" size="2xl">
          John Doe
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Hi, I'm John Doe. I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.
        </Text>
        <VStack spacing={4}>
          <Button colorScheme="teal" size="lg">
            Get in Touch
          </Button>
          <HStack spacing={4}>
            <Link href="https://github.com/johndoe" isExternal>
              <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
            </Link>
            <Link href="https://linkedin.com/in/johndoe" isExternal>
              <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            </Link>
            <Link href="https://twitter.com/johndoe" isExternal>
              <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
