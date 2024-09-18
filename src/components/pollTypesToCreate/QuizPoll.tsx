import { useState } from "react";
import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Radio,
  RadioGroup,
  CloseButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

type QuizPollProps = {
  onChange: (options: string[], correct: string) => void;
};

const QuizPoll = ({ onChange }: QuizPollProps) => {
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [correctOption, setCorrectOption] = useState<string>("");

  const addOption = () => setOptions([...options, ""]);
  const removeOption = (index: number) =>
    setOptions(options.filter((_, i) => i !== index));

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    onChange(newOptions, correctOption);
  };

  return (
    <VStack spacing={4}>
      <FormControl>
        <FormLabel>Quiz</FormLabel>
        {options.map((option, index) => (
          <HStack key={index}>
            {options.length > 2 && (
              <Button
                _hover={"bg: none"}
                size="sm"
                onClick={() => removeOption(index)}
              >
                <CloseButton size="md" />
              </Button>
            )}
            <Input
              marginBottom={3}
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
            <RadioGroup value={correctOption} onChange={setCorrectOption}>
              <Radio value={`${index}`}>Correct</Radio>
            </RadioGroup>
          </HStack>
        ))}
      </FormControl>
      <FormControl>
        <Button
          leftIcon={<AddIcon />}
          colorScheme="blue"
          variant="outline"
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
