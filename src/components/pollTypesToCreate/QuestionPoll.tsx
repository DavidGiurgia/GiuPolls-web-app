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
import { ChevronDownIcon } from "@chakra-ui/icons";
import { QuestionPoll as QuestionPollType} from "../../types";

type QuestionPollProps = {
  onChange: (pollData: QuestionPollType) => void; 
};

const QuestionPoll = ({ onChange }: QuestionPollProps) => {
  const [image, setImage] = useState<File[]>([]);
  const [question, setQuestion] = useState<string>("");
  const { isOpen, onToggle } = useDisclosure();

  // Handle file upload changes
  const handleFileChange = (selectedImage: File[]) => {
    setImage(selectedImage);
  };

  const validateQuestion = (value: string) => {
    setQuestion(value);
    validateForm(value); 
  };

  // Simple validation: check if question or any option is empty
  const validateForm = (questionValue: string) => {
    const isValid = questionValue.trim() !== "";
    onChange({
      id: "", // Completează cu un ID generat sau lăsa-l gol pentru acum
      type: "QuestionPoll", // Tipul specific sondajului
      question: questionValue,
      image, // Imaginea uploadată
      createdAt: new Date(),
      updatedAt: new Date(),
      visibility: 'draft', // Setează vizibilitatea conform logicii tale
      isValid,
    });
  };
  return (
    <VStack spacing={4}>
      {/* Question Input with Validation */}
      <FormControl>
        <Input
          _placeholder={{ opacity: 1, color: "gray.400" }}
          variant={"flushed"}
          marginBottom={3}
          focusBorderColor="purple.500"
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => validateQuestion(e.target.value)} // Validate on change
        />
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
