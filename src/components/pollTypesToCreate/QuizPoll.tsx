import { useState } from "react";
import {
  VStack,
  HStack,
  FormControl,
  Input,
  Button,
  Checkbox,
  CheckboxGroup,
  CloseButton,
  Box,
  Collapse,
  useDisclosure,
} from "@chakra-ui/react";
import { AddIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FileUploader } from "../shared";

type QuizPollProps = {
  onChange: (options: string[], correct: string[]) => void; // for multiple correct options
};

const QuizPoll = ({ onChange }: QuizPollProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [correctOption, setCorrectOption] = useState<string[]>([]); // using an array for multiple correct options
  const { isOpen, onToggle } = useDisclosure(); // For toggling file uploader visibility

  const addOption = () => setOptions([...options, ""]);
  const removeOption = (index: number) =>
    setOptions(options.filter((_, i) => i !== index));

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    onChange(newOptions, correctOption);
  };

  const handleCorrectOptionChange = (values: string[]) => {
    setCorrectOption(values);
    onChange(options, values); // send options and correct answers via callback
  };

  const handleFileChange = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    console.log("Selected files: ", selectedFiles);
  };

  return (
    <VStack spacing={4}>
      <Button colorScheme="yellow" rightIcon={<ChevronDownIcon  />} onClick={onToggle} mt={1}>
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

      <FormControl>
        {/* Question Input */}
        <Input
          _placeholder={{ opacity: 1, color: "gray.400" }}
          focusBorderColor="purple.400"
          variant="flushed"
          mb={2}
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        {/* Options Input */}
        {options.map((option, index) => (
          <HStack key={index}>
            <CheckboxGroup
              value={correctOption}
              onChange={handleCorrectOptionChange}
            >
              <Checkbox colorScheme="green" value={`${index}`} />
            </CheckboxGroup>
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

      {/* Add Option Button */}
      <FormControl>
        <Button
          leftIcon={<AddIcon />}
          variant="ghost"
          onClick={addOption}
          isDisabled={options.length >= 5}
        >
          Add Option
        </Button>
      </FormControl>
    </VStack>
  );
};

export default QuizPoll;
