import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { Bottombar, LeftSidebar, Topbar } from "../components/shared";

const RootLayout = () => {
  return (
    <Flex direction="column" width="full" height="100vh">
      <Topbar />
      
      <Flex flex="1" direction="row">
        <LeftSidebar />

        <Box flex="1" overflowY="auto" marginLeft={{ base: "10px", md: "250px" }}>
          <Outlet />
        </Box>
      </Flex>

      <Bottombar />
    </Flex>
  );
};

export default RootLayout;
