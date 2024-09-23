import { useState } from "react";
import { IoEye } from "react-icons/io5";
import {
  VStack,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  RadioGroup,
  Radio,
  HStack,
  Input,
  Button,
  Divider,
} from "@chakra-ui/react";
import {
  ImagePoll,
  QuestionPoll,
  QuizPoll,
  RatingPoll,
  TextPoll,
  RankingPoll,
} from "../pollTypesToCreate";
import { savePoll } from "../../services/pollService";

const PollForm = () => {
  const [pollType, setPollType] = useState<string>("question");
  const [visibility, setVisibility] = useState<string>("public");
  const [tags, setTags] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [pollData, setPollData] = useState<any>(null);
  const [isValid, setIsValid] = useState<boolean>(false); // New state to track validation

  const validateAndCreatePoll = async () => {
    if (isValid) {
      const result = await savePoll({
        ...pollData,
        visibility,
        tags,
        description,
      });
      if (result.success) {
        alert("Poll created successfully!");
      } else {
        alert("Failed to create poll.");
      }
    } else {
      alert("Validation failed. Please check your poll data.");
    }
  };

  const handlePollChange = (options: string[], isValid: boolean) => {
    setPollData({ options });
    setIsValid(isValid); // Update the validation state
  };
  

  return (
    <VStack spacing={4} align="stretch">
      <FormControl>
        <FormLabel>Select Poll Type</FormLabel>
        <Select value={pollType} onChange={(e) => setPollType(e.target.value)}>
          <option value="question">Question</option>
          <option value="textpoll">Text Poll</option>
          <option value="quiz">Quiz</option>
          <option value="rating">Rating</option>
          <option value="imagepoll">Image Poll</option>
          <option value="ranking">Ranking</option>
        </Select>
      </FormControl>

      {/* Dynamically render the appropriate poll component */}
      {pollType === "question" && (
        <QuestionPoll
          onChange={(data) => {
            setPollData(data); // Update the poll data in parent
            setIsValid(data.isValid); // Update the validation status in parent
          }}
        />
      )}
      {pollType === "textpoll" && (
        <TextPoll
          onChange={(data) => handlePollChange(data.options, data.isValid)}
        />
      )}

      {pollType === "quiz" && (
        <QuizPoll
          onChange={(options, correct, valid) =>
            handlePollChange({ options, correct }, valid)
          }
        />
      )}
      {pollType === "rating" && (
        <RatingPoll
          onChange={(value, valid) => handlePollChange(value, valid)}
        />
      )}
      {pollType === "imagepoll" && (
        <ImagePoll
          onChange={(files, valid) => handlePollChange(files, valid)}
        />
      )}
      {pollType === "ranking" && (
        <RankingPoll
          onChange={(options, valid) => handlePollChange(options, valid)}
        />
      )}

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          focusBorderColor="green.400"
          placeholder="Tell the audience about your poll..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Tags</FormLabel>
        <Input
          focusBorderColor="green.400"
          placeholder="Add tags separated by commas..."
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Visibility</FormLabel>
        <RadioGroup
          value={visibility}
          onChange={(value) => setVisibility(value)}
        >
          <HStack spacing="24px">
            <Radio colorScheme="green" value="public">
              Public
            </Radio>
            <Radio colorScheme="red" value="private">
              Private
            </Radio>
            <Radio value="unlisted">Unlisted</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <Divider my={4} />

      <HStack justifyContent={"end"}>
        <Button
          leftIcon={<IoEye />}
          width={{ base: "full", md: "auto" }}
          px={{ base: "auto", md: "20px" }}
          borderRadius={50}
          onClick={() => validateAndCreatePoll()}
          disabled={!isValid} // Disabled if validation is not true
        >
          Preview
        </Button>
        <Button
          px={{ base: "auto", md: "50px" }}
          width={{ base: "full", md: "auto" }}
          borderRadius={50}
          colorScheme="yellow"
          onClick={() => validateAndCreatePoll()}
          disabled={!isValid} // Disabled if validation is not true
        >
          Post
        </Button>
      </HStack>
    </VStack>
  );
};

export default PollForm;
