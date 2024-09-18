import { useForm } from "react-hook-form"; 
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  Text
} from "@chakra-ui/react";

const SignupForm = () => {
  const isLoading = true; // Placeholder for loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  const handleSignup = () => {
    // No action taken yet, focusing on UI only
  };

  return (
    <Box width="90%" maxWidth="420px" mx="auto" textAlign="center">
      <Heading as="h2" size="lg" mb={2}>
        Create a new account
      </Heading>
      <Text color="gray.500" mb={5}>
        To use GiuPolls, please enter your details
      </Text>

      <form onSubmit={handleSubmit(handleSignup)}>
        <FormControl isInvalid={!!errors.name} mb={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" {...register("name", { required: "Name is required" })} />
          {errors.name && <Text textAlign='left' color="red.500">{errors.name.message}</Text>}
        </FormControl>

        <FormControl isInvalid={!!errors.username} mb={4}>
          <FormLabel>Username</FormLabel>
          <Input type="text" {...register("username", { required: "Username is required" })} />
          {errors.username && <Text textAlign='left' color="red.500">{errors.username.message}</Text>}
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register("email", { required: "Email is required" })} />
          {errors.email && <Text textAlign='left' color="red.500">{errors.email.message}</Text>}
        </FormControl>

        <FormControl isInvalid={!!errors.password} mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" {...register("password", { required: "Password is required" })} />
          {errors.password && <Text textAlign='left' color="red.500">{errors.password.message}</Text>}
        </FormControl>

        <Button type="submit" colorScheme="yellow" width="full" mb={4} >
          {isLoading ? (
            <Flex alignItems="center" justifyContent="center" gap={2}>
              <Spinner /> Loading...
            </Flex>
          ) : (
            "Sign Up"
          )}
        </Button>

        <Text color="gray.500">
          Already have an account?{" "}
          <Link to="/log-in" style={{ fontWeight: "bold" }}>
            Log in
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default SignupForm;
