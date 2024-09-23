import {
  Box,
  FormControl,
  Input,
  Button,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Collapse,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FileUploader } from "../shared";
import { useState } from "react";
import ChoiceButtons from "../shared/ChoiceButton";
import EmojiButton from "../shared/EmojiButton";
import { AddIcon, ChevronDownIcon, MinusIcon } from "@chakra-ui/icons";

type RatingPollProps = {
  onChange: (value: string) => void;
};

const RatingPoll = ({ onChange }: RatingPollProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("Stars"); // Default is "Stars"
  const [starCount, setStarCount] = useState<number>(5); // Default 5 stars
  const [emojis, setEmojis] = useState<string[]>(["😊", "😂", "😍"]);
  const { isOpen, onToggle } = useDisclosure();

  const handleFileChange = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    console.log("Selected files: ", selectedFiles);
  };

  const handleSelectionChange = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    console.log("Selected option:", selectedOption);
  };

  const addStar = () => {
    if (starCount < 10) setStarCount(starCount + 1);
  };

  const removeStar = () => {
    if (starCount > 3) setStarCount(starCount - 1);
  };

  const handleEmojiChange = (index: number, newEmoji: string) => {
    const updatedEmojis = [...emojis];
    updatedEmojis[index] = newEmoji;
    setEmojis(updatedEmojis);
  };

  const addEmoji = () => {
    if (emojis.length < 8) {
      setEmojis([...emojis, "😊"]);
    }
  };

  const removeEmoji = () => {
    if (emojis.length > 3) {
      setEmojis(emojis.slice(0, emojis.length - 1)); // Remove the last emoji
    }
  };

  return (
    <VStack>
      <FormControl>
        <Input
          _placeholder={{ opacity: 1, color: "gray.400" }}
          variant={"flushed"}
          marginBottom={3}
          focusBorderColor="purple.500"
          placeholder="Type your question here..."
          onChange={(e) => onChange(e.target.value)}
        />
      </FormControl>

      {/* Button to show/hide FileUploader */}
      <Button
        rightIcon={<ChevronDownIcon />}
        onClick={onToggle}
        mt={1}
      >
        Upload image (optional)
      </Button>

      {/* Collapse component to show or hide FileUploader */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} p={4} bg="gray.100" rounded="md" shadow="md">
          <FileUploader
            fieldChange={handleFileChange}
            mediaUrl=""
            width={"full"}
          />
        </Box>
      </Collapse>

      <FormControl>
        <Box  my={5} width="full">
          {/* Align ChoiceButtons to the right */}
          <Box alignSelf="center" display="flex" justifyContent="start">
            <ChoiceButtons
              options={["Stars", "Emojis", "Slider"]}
              onSelectionChange={handleSelectionChange}
            />
          </Box>

          {/* Conditional rendering based on the selected option */}
          {selectedOption === "Stars" && (
            <Box mt={5}>
              <HStack alignSelf="center" display="flex" justifyContent="center">
                {Array.from({ length: starCount }, (_, index) => (
                  <Box key={index} fontSize="32px" color="yellow.400">
                    ★
                  </Box>
                ))}
              </HStack>
              <HStack justifyContent={"center"} mt={2}>
                <Button onClick={addStar} isDisabled={starCount >= 10}>
                  <AddIcon />
                </Button>
                <Button onClick={removeStar} isDisabled={starCount <= 3}>
                  <MinusIcon />
                </Button>
              </HStack>
            </Box>
          )}

          {selectedOption === "Emojis" && (
            <Box
              alignSelf="center"
              display="flex"
              justifyContent="center"
              my={5}
            >
              <HStack width={'auto'} spacing={4}>
                {emojis.map((emoji, index) => (
                  <EmojiButton
                    key={index}
                    emoji={emoji}
                    onEmojiSelect={(newEmoji) =>
                      handleEmojiChange(index, newEmoji)
                    }
                  />
                ))}
                {emojis.length < 5 && (
                  <Button onClick={addEmoji}>
                    <AddIcon />
                  </Button>
                )}
                {emojis.length > 3 && (
                  <Button onClick={removeEmoji} color="red.500">
                    <MinusIcon />
                  </Button>
                )}
              </HStack>
            </Box>
          )}

          {selectedOption === "Slider" && (
            <Box mt={4}>
              <Slider aria-label="slider-ex" defaultValue={50}>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <HStack justifyContent="space-between" mt={2}>
                <Input placeholder="Enter label" htmlSize={6} width="auto" />
                <Input placeholder="Enter label" htmlSize={6} width="auto" />
              </HStack>
            </Box>
          )}
        </Box>
      </FormControl>
    </VStack>
  );
};

export default RatingPoll;
