import { useState} from "react";
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
  FormErrorMessage,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FileUploader } from "../shared";
import { validateTextPoll } from "../../services/validations"; // Import validation logic

type TextPollProps = {
  onChange: (data: { options: string[]; question: string; isValid: boolean }) => void;
};

const TextPoll = ({ onChange }: TextPollProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [errors, setErrors] = useState({
    questionError: "",
    optionsError: "",
  });

  const { isOpen, onToggle } = useDisclosure(); // Control for FileUploader visibility

  // Handle file upload changes
  const handleFileChange = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
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

  // Validate form inputs (question and options)
  const validateForm = (questionValue: string, optionsValue: string[]) => {
    const pollData = { question: questionValue, options: optionsValue };

    // Validate using the validation function
    const isValid = validateTextPoll(pollData); //aici eroarea

    let questionError = "";
    let optionsError = "";

    if (!questionValue) {
      questionError = "Question is required.";
    }

    if (optionsValue.length < 2 || optionsValue.length > 4) {
      optionsError = "You need between 2 to 4 options.";
    } else if (optionsValue.some(option => !option.trim())) {
      optionsError = "Options cannot be empty.";
    }

    setErrors({ questionError, optionsError });

    // Notify parent component
    onChange({
      question: questionValue,
      options: optionsValue,
      isValid: isValid && !questionError && !optionsError,
    });
  };

  // Handle question input changes
  const handleQuestionChange = (value: string) => {
    setQuestion(value);
    validateForm(value, options); // Revalidate when question changes
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

      {/* Question input with validation error */}
      <FormControl isInvalid={!!errors.questionError}>
        <Input
          _placeholder={{ opacity: 1, color: "gray.400" }}
          variant={"flushed"}
          focusBorderColor="purple.500"
          marginBottom={3}
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => handleQuestionChange(e.target.value)}
        />
        {errors.questionError && (
          <FormErrorMessage>{errors.questionError}</FormErrorMessage>
        )}
      </FormControl>

      {/* Options input with validation error */}
      <FormControl isInvalid={!!errors.optionsError}>
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
        {errors.optionsError && (
          <FormErrorMessage>{errors.optionsError}</FormErrorMessage>
        )}
      </FormControl>

      {/* Add new option button */}
      {options.length < 5 && (
        <Button alignSelf={"start"} leftIcon={<AddIcon />} variant="ghost" onClick={addOption}>
          Add Option
        </Button>
      )}
    </VStack>
  );
};

export default TextPoll;
