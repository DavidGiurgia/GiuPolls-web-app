import { Outlet, Navigate } from "react-router-dom";
//import { useUserContext } from "@/context/AuthContext";
import { Box, Flex, Image } from "@chakra-ui/react";

export default function AuthLayout() {
  const isAuthenticated  = false;//useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <Flex bg={'#000'} flex="1" justify="center" align="center"  py={10}>
          <Box flex="1" display="flex" flexDirection="column" alignItems="center">
            <Outlet />
          </Box>
          <Image
            src="/assets/images/side-img.svg"
            alt="logo"
            display={{ base: "none", xl: "block" }}
            h="100vh"
            w="50%"
            objectFit="cover"
            bgRepeat="no-repeat"
          />
        </Flex>
      )}
    </>
  );
}
