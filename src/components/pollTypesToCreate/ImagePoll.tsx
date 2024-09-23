import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Switch,
  SimpleGrid,
  HStack,
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
        <Input
          _placeholder={{ opacity: 1, color: "gray.400" }}
          variant={"flushed"}
          focusBorderColor="purple.400"
          marginBottom={3}
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </FormControl>

      {/* Switch pentru a arăta sau ascunde inputurile */}
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="toggle-inputs" mb="0">
          Use option text
        </FormLabel>
        <Switch
          id="toggle-inputs"
          isChecked={showInputs}
          onChange={() => setShowInputs(!showInputs)}
        />
      </FormControl>

      {/* Aranjare opțiuni în grid */}
      <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} width="100%">
        {options.map((_, index) => (
          <VStack key={index} spacing={2} width="100%">
            {showInputs && (
              <FormControl>
                <Input
                  focusBorderColor="yellow.400"
                  marginBottom={3}
                  placeholder={`Option ${index + 1}`}
                />
              </FormControl>
            )}
            <FileUploader
              fieldChange={(file) => onChange(file, index)}
              mediaUrl=""
              width={"full"}
            />
          </VStack>
        ))}
      </SimpleGrid>

      <HStack alignSelf={'start'}>
        {options.length <= 2 ? (
          <Button
            leftIcon={<AddIcon />}
            variant="ghost"
            onClick={addOptions}
            isDisabled={options.length >= 4}
          >
            Add Options
          </Button>
        ) : (
          <Button
            leftIcon={<MinusIcon />}
            colorScheme="red"
            variant="ghost"
            onClick={removeOptions}
            isDisabled={options.length <= 2}
          >
            Remove Options
          </Button>
        )}
      </HStack>
    </VStack>
  );
};

export default ImagePoll;
