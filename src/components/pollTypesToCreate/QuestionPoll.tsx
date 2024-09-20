import { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  Box,
  Collapse,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FileUploader } from "../shared";
import { HiArrowSmallDown } from "react-icons/hi2";
import { ChevronDownIcon } from "@chakra-ui/icons";

type QuestionPollProps = {
  onChange: (value: string) => void;
};

const QuestionPoll = ({ onChange }: QuestionPollProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const { isOpen, onToggle } = useDisclosure(); // For toggling visibility

  // Function to handle files from FileUploader
  const handleFileChange = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    console.log("Selected files: ", selectedFiles);
  };

  return (
    <VStack spacing={4}>
      <FormControl>
        <Input
          _placeholder={{ opacity: 1, color: "gray.400" }}
          variant={"flushed"}
          marginBottom={3}
          focusBorderColor="purple.500"
          placeholder="Type your question here..."
          onChange={(e) => onChange(e.target.value)}
        />
      </FormControl>
      <Button
        colorScheme="yellow"
        rightIcon={<ChevronDownIcon />}
        onClick={onToggle}
        mt={1}
      >
        Upload image (optional)
      </Button>
      {/* FileUploader with Collapse */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} p={4} bg="gray.100" rounded="md" shadow="md">
          <FileUploader
            fieldChange={handleFileChange}
            mediaUrl=""
            width={"full"}
            height={"400px"}
          />
        </Box>
      </Collapse>
    </VStack>
  );
};

export default QuestionPoll;
