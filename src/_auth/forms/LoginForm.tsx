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
  Text,
} from "@chakra-ui/react";

const SigninForm = () => {
  const isLoading = true; // Placeholder for loading state

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignin = () => {
    // No action taken yet, focusing on UI only
  };

  return (
    <Box width="90%" maxWidth="420px" mx="auto" textAlign="center">
      <Heading as="h2" size="lg" mb={2}>
        Log in to your account
      </Heading>
      <Text color="gray.500" mb={5}>
        Welcome back! Please enter your details.
      </Text>

      <form onSubmit={handleSubmit(handleSignin)}>
        <FormControl isInvalid={!!errors.email} mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <Text textAlign='left' color="red.500">{errors.email.message}</Text>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.password} mb={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <Text textAlign='left' color="red.500">{errors.password.message}</Text>
          )}
        </FormControl>

        <Button type="submit" colorScheme="yellow" width="full" mb={4}>
          {isLoading ? (
            <Flex alignItems="center" justifyContent="center" gap={2}>
              <Spinner /> Loading...
            </Flex>
          ) : (
            "Log in"
          )}
        </Button>

        <Text color="gray.500">
          Don&apos;t have an account?{" "}
          <Link to="/sign-up" style={{ fontWeight: "bold" }}>
            Sign up
          </Link>
        </Text>
      </form>
    </Box>
  );
};

export default SigninForm;
