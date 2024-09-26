import {
  Box,
  VStack,
  Button,
  useColorMode,
  IconButton,
  HStack,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";
import { sidebarLinks } from "../../constants";
import Logo from "./Logo";

const LeftSidebar = () => {
  const { pathname } = useLocation();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      background={
        colorMode === "light" ? "componentBg.light" : "componentBg.dark"
      }
      position={"fixed"}
      display={{ base: "none", md: "flex" }}
      flexDir="column"
      justifyContent="space-between"
      width="250px"
      height="95vh"
      p={4}
      m={4}
      borderRadius={16}
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
                  leftIcon={isActive ? link.activeIcon : link.inactiveIcon}
                  iconSpacing={3}
                  justifyContent="flex-start"
                  fontWeight={isActive ? "bold" : "normal"}
                  width="100%"
                  fontSize={"16px"}
                >
                  {link.label}
                </Button>
              </NavLink>
            );
          })}

          <Divider />

          {/* Button to open the Modal */}
          <Button leftIcon={<AddIcon />} onClick={onOpen}>
            Create
          </Button>
        </VStack>
      </Box>

      <HStack width={"full"}>
        <Button
          onClick={toggleColorMode}
          leftIcon={<HamburgerIcon />}
          mt={4}
          aria-label="More"
          flex={1}
        >
          More
        </Button>
        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
          mt={4}
          aria-label="Toggle color mode"
          alignSelf="center"
        />
      </HStack>

      {/* Modal for content creation */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          background={
            colorMode === "light" ? "componentBg.light" : "componentBg.dark"
          }
          maxH="80%"
          maxW="80%"
          display={'flex'}
          alignItems={'center'}
        >
          {" "}
          <ModalHeader>Create New Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack spacing={6} my={'120px'}>
              {/* Insights (Poll) Card */}
              <Box
                as="button"
                w="300px"
                h="300px"
                bg="gray.100"
                borderRadius="md"
                boxShadow="md"
                _hover={{
                  bg: "gray.200",
                  transform: "scale(1.02)",
                  transition: "0.2s",
                }}
                onClick={() => console.log("Create Insights (Poll)")}
              >
                <Text fontSize="xl" textAlign="center" mt={4}>
                  Create Poll
                </Text>
              </Box>

              {/* Quizzes Card */}
              <Box
                as="button"
                w="300px"
                h="300px"
                bg="gray.100"
                borderRadius="md"
                boxShadow="md"
                _hover={{
                  bg: "gray.200",
                  transform: "scale(1.02)",
                  transition: "0.2s",
                }}
                onClick={() => console.log("Create Quiz")}
              >
                <Text fontSize="xl" textAlign="center" mt={4}>
                  Create Quiz
                </Text>
              </Box>

              {/* Quotes Card */}
              <Box
                as="button"
                w="300px"
                h="300px"
                bg="gray.100"
                borderRadius="md"
                boxShadow="md"
                _hover={{
                  bg: "gray.200",
                  transform: "scale(1.02)",
                  transition: "0.2s",
                }}
                onClick={() => console.log("Create Quotes")}
              >
                <Text fontSize="xl" textAlign="center" mt={4}>
                  Create Quote
                </Text>
              </Box>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default LeftSidebar;
