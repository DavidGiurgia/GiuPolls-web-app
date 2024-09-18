import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  VStack,
  Button,
  useColorMode,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { sidebarLinks } from "../../constants";
import { FaSun, FaMoon } from "react-icons/fa";
import Logo from "./Logo";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      position={'fixed'}
      display={{ base: "none", md: "flex" }}
      flexDir="column"
      justifyContent="space-between"
      width="250px"
      height="100vh"
      p={4}
      borderRight="1px solid"
      borderColor={borderColor}
    >
      <Box>
        <Logo />

        <VStack marginTop="40px" spacing={4} align="stretch">
          {sidebarLinks.map((link) => {
            const isActive = pathname === link.route;
            return (
              <NavLink key={link.label} to={link.route}>
                <Button
                  variant={isActive ? "solid" : "ghost"}
                  colorScheme={isActive ? "yellow" : "gray"}
                  leftIcon={link.icon}
                  justifyContent="flex-start"
                  fontWeight={isActive ? "bold" : "normal"}
                  width="100%"
                >
                  {link.label}
                </Button>
              </NavLink>
            );
          })}
        </VStack>
      </Box>

      <IconButton
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
        mt={4}
        aria-label="Toggle color mode"
        alignSelf="center"
      />
    </Box>
  );
};

export default LeftSidebar;
