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

type TextPollProps = {
  onChange: (options: string[]) => void;
};

const TextPoll = ({ onChange }: TextPollProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const { isOpen, onToggle } = useDisclosure(); // Control for FileUploader visibility

  const handleFileChange = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    console.log("Selected files: ", selectedFiles);
  };

  const addOption = () => setOptions([...options, ""]);
  const removeOption = (index: number) =>
    setOptions(options.filter((_, i) => i !== index));

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    onChange(newOptions);
  };

  return (
    <VStack spacing={4}>
      {/* Button to show/hide FileUploader */}
      <Button colorScheme="yellow" rightIcon={<ChevronDownIcon  />} onClick={onToggle} mt={1}>
        Upload image (optional)
      </Button>

      {/* Collapse component to show or hide FileUploader */}
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

      {/* Întrebarea principală */}
      <FormControl>
        <Input
          _placeholder={{ opacity: 1, color: "gray.400" }}
          variant={"flushed"}
          focusBorderColor="purple.500"
          marginBottom={3}
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </FormControl>

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
              <CloseButton
                size="md"
                onClick={() => removeOption(index)}
              ></CloseButton>
            )}
          </HStack>
        ))}
      </FormControl>

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

export default TextPoll;
