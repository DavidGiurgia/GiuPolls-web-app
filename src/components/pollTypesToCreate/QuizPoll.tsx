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
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

type QuizPollProps = {
  onChange: (options: string[], correct: string[]) => void; // actualizăm tipul pentru opțiuni multiple corecte
};

const QuizPoll = ({ onChange }: QuizPollProps) => {
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [correctOption, setCorrectOption] = useState<string[]>([]); // folosim un array de stringuri pentru multiple opțiuni corecte

  const addOption = () => setOptions([...options, ""]);
  const removeOption = (index: number) =>
    setOptions(options.filter((_, i) => i !== index));

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    onChange(newOptions, correctOption); // actualizăm și starea la schimbare
  };

  const handleCorrectOptionChange = (values: string[]) => {
    setCorrectOption(values);
    onChange(options, values); // trimitem opțiunile și răspunsurile corecte în callback
  };

  return (
    <VStack spacing={4}>
      {/* Întrebarea principală */}
      <FormControl>
        <Input
          focusBorderColor="purple.400"
          variant="flushed"
          marginBottom={3}
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </FormControl>

      <FormControl>
        {options.map((option, index) => (
          <HStack key={index}>
            {/* CheckboxGroup pentru opțiuni multiple */}
            <CheckboxGroup value={correctOption} onChange={handleCorrectOptionChange}>
              <Checkbox colorScheme="green" value={`${index}`} />
            </CheckboxGroup>
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

export default QuizPoll;
