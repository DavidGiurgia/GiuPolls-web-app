import { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  CloseButton,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

type TextPollProps = {
  onChange: (options: string[]) => void;
};

const TextPoll = ({ onChange }: TextPollProps) => {
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", ""]);

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
      {/* Întrebarea principală */}
      <FormControl>
        <Input
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
              marginBottom={3}
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
