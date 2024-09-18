import { Flex } from "@chakra-ui/react"

const Bottombar = () => {
  return (
    <Flex
      borderTop={'1px solid #ccc'}
      display={{ base: "flex", md: "none" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={'60px'}
    >
      {/*implement lista navigare for mobile screen */}
    </Flex>
  )
}

export default Bottombar