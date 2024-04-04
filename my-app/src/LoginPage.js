import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const LoginPage = ({ navigateToHomePage, navigateToSignUpPage }) => {
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      //  navigate("/home");
        navigateToHomePage();
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box
        p={8}
        w={"80%"}
        height={"90vh"}
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        display="flex"
      >
        <Box flex={1} mr={8} w={"40%"}>
          <Image
            src="https://static.vecteezy.com/system/resources/previews/028/620/185/original/blue-background-photos-and-cyan-wallpaper-for-free-download-free-vector.jpg"
            alt="Logo"
            height={"100%"}
          />
        </Box>
        <Box w={"50%"} p={"10%"} lineHeight={"10"}>
          <Box
            backgroundColor={"blue"}
            w={"20px"}
            height={"20px"}
            margin={"auto"}
            borderRadius={"100%"}
          ></Box>
          <Heading size="lg">Arba Shopping Studio</Heading>
          <Text fontSize="sm">
            Lorem ipsum is placeholder text commonly used in the graphic.
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <InputGroup>
                <Input type="email" placeholder="Email" required />
              </InputGroup>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                />
                <InputRightElement>
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleTogglePasswordVisibility}
                  >
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button colorScheme="blue" type="submit" width="full">
                Login
              </Button>
            </VStack>
          </form>
          <Text mt={4} textAlign="center">
            Don't have an account?{" "}
            <button onClick={navigateToSignUpPage}>Sign Up</button>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default LoginPage;
