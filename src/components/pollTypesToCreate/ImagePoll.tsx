import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Switch,
} from "@chakra-ui/react";
import { useState } from "react";
import { FileUploader } from "../shared";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

type ImagePollProps = {
  onChange: (files: File[], optionIndex: number) => void;
};

const ImagePoll = ({ onChange }: ImagePollProps) => {
  const [options, setOptions] = useState<string[]>(["", ""]);
  const [showInputs, setShowInputs] = useState<boolean>(true);
  const [question, setQuestion] = useState<string>("");

  const addOptions = () => setOptions([...options, "", ""]);
  const removeOptions = () => {
    if (options.length > 2) {
      setOptions(options.slice(0, -2));
    }
  };

  return (
    <VStack spacing={4}>
      {/* Întrebarea principală */}
      <FormControl>
        <FormLabel textAlign="left" marginBottom={1}>
          Enter your question
        </FormLabel>
        <Input
          marginBottom={3}
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </FormControl>

      {/* Switch pentru a arăta sau ascunde inputurile */}
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="toggle-inputs" mb="0">
          Show Option Inputs
        </FormLabel>
        <Switch
          id="toggle-inputs"
          isChecked={showInputs}
          onChange={() => setShowInputs(!showInputs)}
        />
      </FormControl>

      {/* Aranjare opțiuni două câte două */}
      {options.reduce<JSX.Element[]>((acc, _, index) => {
        if (index % 2 === 0) {
          const firstOption = (
            <VStack key={index} spacing={2} width="100%">
              {showInputs && (
                <FormControl>
                  <FormLabel textAlign="left" marginBottom={1}>
                    Option {index + 1}
                  </FormLabel>
                  <Input
                    marginBottom={3}
                    placeholder={`Enter option ${index + 1}`}
                  />
                </FormControl>
              )}
              <FileUploader
                fieldChange={(file) => onChange(file, index)}
                mediaUrl=""
              />
            </VStack>
          );

          const secondOption =
            options[index + 1] !== undefined ? (
              <VStack key={index + 1} spacing={2} width="100%">
                {showInputs && (
                  <FormControl>
                    <FormLabel textAlign="left" marginBottom={1}>
                      Option {index + 2}
                    </FormLabel>
                    <Input
                      marginBottom={3}
                      placeholder={`Enter option ${index + 2}`}
                    />
                  </FormControl>
                )}
                <FileUploader
                  fieldChange={(file) => onChange(file, index + 1)}
                  mediaUrl=""
                />
              </VStack>
            ) : null;

          acc.push(
            <HStack spacing={4} key={index} width="100%">
              {firstOption}
              {secondOption}
            </HStack>
          );
        }
        return acc;
      }, [])}

      <HStack spacing={4}>
      <Button
          leftIcon={<AddIcon />}
          colorScheme="blue"
          variant="outline"
          onClick={addOptions}
          isDisabled={options.length >= 4}
        >
          Add Options
        </Button>
        <Button
          leftIcon={<MinusIcon />}
          colorScheme="red"
          variant="outline"
          onClick={removeOptions}
          isDisabled={options.length <= 2}
        >
          Remove Options 
        </Button>
      </HStack>
    </VStack>
  );
};

export default ImagePoll;
