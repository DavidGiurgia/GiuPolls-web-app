import { VStack, FormControl, FormLabel, Input, Button, Switch, SimpleGrid, HStack } from "@chakra-ui/react";
import { useState } from "react";
import { FileUploader } from "../shared";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { ImagePoll as ImagePollType } from "../../types"; // Importă tipul de sondaj

interface ImagePollProps {
  onChange: (pollData: ImagePollType) => void; // Folosește tipul ImagePoll direct
}

const ImagePoll = ({ onChange }: ImagePollProps) => {
  const [options, setOptions] = useState<{ text: string; image?: File[] }[]>([{ text: "", image: undefined }, { text: "", image: undefined }]);
  const [showInputs, setShowInputs] = useState<boolean>(true);
  const [question, setQuestion] = useState<string>("");

  const addOptions = () => setOptions([...options, { text: "", image: undefined }, { text: "", image: undefined }]);
  
  const removeOptions = () => {
    if (options.length > 2) {
      setOptions(options.slice(0, -2));
    }
  };

  // Handle option text changes
  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index].text = value;
    setOptions(newOptions);
    validateForm(question, newOptions); // Revalidate when options change
  };

  // Handle image upload changes
  const handleImageChange = (file: File[] | undefined, index: number) => {
    const newOptions = [...options];
    newOptions[index].image = file;
    setOptions(newOptions);
    validateForm(question, newOptions); // Revalidate when image changes
  };

  // Validate the form
  const validateForm = (questionValue: string, optionsValue: { text: string; image?: File[] }[]) => {
    const isValid = questionValue.trim() !== "" && optionsValue.every(option => option.text.trim() !== "");
    onChange({
      id: "", // Completează cu un ID generat sau lăsa-l gol pentru acum
      type: "ImagePoll", // Tipul specific sondajului
      question: questionValue,
      options: optionsValue, // Folosește opțiunile din starea curentă
      image: undefined, // Poate să rămână gol sau poți să gestionezi o imagine principală
      createdAt: new Date(),
      updatedAt: new Date(),
      visibility: 'public', // Setează vizibilitatea conform logicii tale
      isValid,
    });
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
          onChange={(e) => {
            setQuestion(e.target.value);
            validateForm(e.target.value, options); // Revalidate when question changes
          }}
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
        {options.map((option, index) => (
          <VStack key={index} spacing={2} width="100%">
            {showInputs && (
              <FormControl>
                <Input
                  focusBorderColor="yellow.400"
                  marginBottom={3}
                  placeholder={`Option ${index + 1}`}
                  value={option.text}
                  onChange={(e) => handleOptionChange(index, e.target.value)}
                />
              </FormControl>
            )}
            <FileUploader
              fieldChange={(file) => handleImageChange(file, index)}
              mediaUrl="" // Adaugă un URL de imagine dacă este disponibil
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
