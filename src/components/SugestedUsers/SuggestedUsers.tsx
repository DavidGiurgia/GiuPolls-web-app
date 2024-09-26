import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";

const SugestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built By{" "}
        <Link
          href="https://www.linkedin.com/in/giurgia-david-60339726a/"
          target="_blank"
          fontSize={14}
        >
          Giurgia David
        </Link>
      </Box>
    </VStack>
  );
};

export default SugestedUsers;
