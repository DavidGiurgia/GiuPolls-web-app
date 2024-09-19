import { useState } from "react";
import {
  HStack,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Switch,
} from "@chakra-ui/react";
import { FileUploader } from "../shared";

type RankingPollProps = {
  onChange: (files: File[], optionIndex: number) => void;
};

const RankingPoll = ({ onChange }: RankingPollProps) => {
  const [showInputs, setShowInputs] = useState<boolean>(true);
  const [question, setQuestion] = useState<string>("");

  return (
    <VStack spacing={4} width="100%">
      {/* Întrebarea principală */}
      <FormControl>
        <FormLabel>Enter your question</FormLabel>
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

      {/* Aranjare opțiuni responsive */}
      <HStack spacing={4} width="100%" wrap="wrap">
        <VStack spacing={2} width={{ base: "100%", sm: "48%" }} align="stretch">
          {showInputs && (
            <>
              <FormControl>
                <FormLabel>Option 1</FormLabel>
                <Input
                  marginBottom={3}
                  placeholder="Enter option 1 text..."
                  width="100%"
                />
              </FormControl>
            </>
          )}
          <FileUploader fieldChange={(file) => onChange(file, 0)} mediaUrl="" />
        </VStack>

        <VStack spacing={2} width={{ base: "100%", sm: "48%" }} align="stretch">
          {showInputs && (
            <>
              <FormControl>
                <FormLabel>Option 2</FormLabel>
                <Input
                  marginBottom={3}
                  placeholder="Enter option 2 text..."
                  width="100%"
                />
              </FormControl>
            </>
          )}
          <FileUploader fieldChange={(file) => onChange(file, 1)} mediaUrl="" />
        </VStack>
      </HStack>
    </VStack>
  );
};

export default RankingPoll;
