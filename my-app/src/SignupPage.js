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

const SignupPage = ({ navigateToLoginPage }) => {
  const [showPassword, setShowPassword] = useState(false);
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      //    navigate("/login");
        navigateToLoginPage();
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
            Lorem ipsum is placeholder text commonly used in the.
          </Text>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <InputGroup>
                <Input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <InputGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </InputGroup>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
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
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
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
                Signup
              </Button>
            </VStack>
          </form>
          <Text mt={4} textAlign="center">
            Already have an account?{" "}
            <Link color="blue.500" href="/login">
              Login
            </Link>
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignupPage;
