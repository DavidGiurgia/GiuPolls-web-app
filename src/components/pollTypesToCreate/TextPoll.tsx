import { useState } from "react";
import {
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  CloseButton,
  Collapse,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FileUploader } from "../shared";
import { TextPoll as TextPollType} from "../../types";

interface TextPollProps {
  onChange: (pollData: TextPollType) => void; // Folosește tipul TextPoll direct
}


const TextPoll = ({ onChange }: TextPollProps) => {
  const [image, setImage] = useState<File[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const { isOpen, onToggle } = useDisclosure(); // Control for FileUploader visibility

  // Handle file upload changes
  const handleFileChange = (selectedImage: File[]) => {
    setImage(selectedImage);
  };

  // Add a new option to the list
  const addOption = () => setOptions([...options, ""]);

  // Remove an option from the list
  const removeOption = (index: number) =>
    setOptions(options.filter((_, i) => i !== index));

  // Handle option text changes
  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    validateForm(question, newOptions); // Revalidate when options change
  };

  // Handle question input changes
  const handleQuestionChange = (value: string) => {
    setQuestion(value);
    validateForm(value, options); // Revalidate when question changes
  };

  // Simple validation: check if question or any option is empty
  const validateForm = (questionValue: string, optionsValue: string[]) => {
    const isValid = questionValue.trim() !== "" && optionsValue.every(option => option.trim() !== "");
    onChange({
      id: "", // Completează cu un ID generat sau lăsa-l gol pentru acum
      type: "TextPoll", // Tipul specific sondajului
      question: questionValue,
      options: optionsValue.map((opt) => ({ text: opt })), // Mapare opțiuni în structura { text: string }
      image, // Imaginea uploadată
      createdAt: new Date(),
      updatedAt: new Date(),
      visibility: 'public', // Setează vizibilitatea conform logicii tale
      isValid,
    });
  };
  

  return (
    <VStack spacing={4}>
      {/* Button to show/hide FileUploader */}
      <Button rightIcon={<ChevronDownIcon />} onClick={onToggle} mt={1}>
        Upload image (optional)
      </Button>

      {/* Collapse component to show or hide FileUploader */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} p={2} bg="gray.100" rounded="md" shadow="md">
          <FileUploader fieldChange={handleFileChange} mediaUrl="" width={"full"} />
        </Box>
      </Collapse>

      {/* Question input */}
      <FormControl>
        <Input
          _placeholder={{ opacity: 1, color: "gray.400" }}
          variant={"flushed"}
          focusBorderColor="purple.500"
          marginBottom={3}
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => handleQuestionChange(e.target.value)}
        />
      </FormControl>

      {/* Options input */}
      <FormControl>
        {options.map((option, index) => (
          <HStack key={index}>
            <Input
              focusBorderColor="yellow.400"
              my={1}
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            {options.length > 2 && (
              <CloseButton size="md" onClick={() => removeOption(index)} />
            )}
          </HStack>
        ))}
      </FormControl>

      {/* Add new option button */}
      {options.length < 4 && (
        <Button alignSelf={"start"} leftIcon={<AddIcon />} variant="ghost" onClick={addOption}>
          Add Option
        </Button>
      )}
    </VStack>
  );
};

export default TextPoll;
