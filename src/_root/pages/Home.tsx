import { Box, Container, Flex, useColorMode } from "@chakra-ui/react";
import SugestedUsers from "../../components/SugestedUsers/SuggestedUsers";
import FeedPosts from "../../components/FeedPosts/FeedPosts";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Container maxW={"100%"}>
      <Flex gap={'10px'}>
        <Box
          background={
            colorMode === "light" ? "componentBg.light" : "componentBg.dark"
          }
          flex={2}
          py={10}
          borderRadius={16}
        >
          <FeedPosts />
        </Box>
        <Box
          flex={3}
          mr={10}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
          background={
            colorMode === "light" ? "componentBg.light" : "componentBg.dark"
          }
          borderRadius={16}
        >
          <SugestedUsers />
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;
