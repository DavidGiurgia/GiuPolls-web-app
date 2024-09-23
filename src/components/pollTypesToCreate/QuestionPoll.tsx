import { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  Input,
  Button,
  Box,
  Collapse,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FileUploader } from "../shared";
import { ChevronDownIcon } from "@chakra-ui/icons";

type QuestionPollProps = {
  onChange: (data: { question: string; files: File[]; isValid: boolean }) => void;
};

const QuestionPoll = ({ onChange }: QuestionPollProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [error, setError] = useState<string | null>(null); // State for validation error
  const { isOpen, onToggle } = useDisclosure();

  const handleFileChange = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    // Pass the updated question, files, and validation state to the parent
    onChange({ question, files: selectedFiles, isValid: !error && question.length >= 2 });
  };

  const validateQuestion = (value: string) => {
    if (value.length < 2) {
      setError("Question must be at least 2 characters long.");
    } else {
      setError(null); // Clear error if validation passes
    }
    setQuestion(value);
    // Pass the updated question, files, and validation state to the parent
    onChange({ question: value, files, isValid: !error && value.length >= 2 });
  };

  return (
    <VStack spacing={4}>
      {/* Question Input with Validation */}
      <FormControl isInvalid={!!error}>
        <Input
          _placeholder={{ opacity: 1, color: "gray.400" }}
          variant={"flushed"}
          marginBottom={3}
          focusBorderColor="purple.500"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => validateQuestion(e.target.value)} // Validate on change
        />
        {error && <FormErrorMessage>{error}</FormErrorMessage>} {/* Display error message */}
      </FormControl>

      {/* Optional Image Upload */}
      <Button rightIcon={<ChevronDownIcon />} onClick={onToggle} mt={1}>
        Upload image (optional)
      </Button>

      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} p={2} bg="gray.100" rounded="md" shadow="md">
          <FileUploader fieldChange={handleFileChange} mediaUrl="" width="100%" />
        </Box>
      </Collapse>
    </VStack>
  );
};

export default QuestionPoll;
