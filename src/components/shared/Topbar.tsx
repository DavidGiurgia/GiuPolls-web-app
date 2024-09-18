import { Flex } from "@chakra-ui/react";
import Logo from "./Logo";
const Topbar = () => {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      height={'40px'}
    >
      {/*implement topbar for mobile screen */}
      <Logo />
    </Flex>
  );
};

export default Topbar;
