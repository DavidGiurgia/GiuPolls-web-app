import { useState } from "react";
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

const CreatePoll = () => {
  const [pollType, setPollType] = useState<string>("question");
  const [visibility, setVisibility] = useState<string>("public");
  const [tags, setTags] = useState<string>("");
  const [description, setdescription] = useState<string>("");

  const handleCreatePoll = () => {
    // Handle poll creation logic
    console.log({ pollType, visibility, tags, description });
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
        <QuestionPoll onChange={(value) => console.log(value)} />
      )}
      {pollType === "textpoll" && (
        <TextPoll onChange={(options) => console.log(options)} />
      )}
      {pollType === "quiz" && (
        <QuizPoll
          onChange={(options, correct) => console.log(options, correct)}
        />
      )}
      {pollType === "rating" && (
        <RatingPoll onChange={(value) => console.log(value)} />
      )}
      {pollType === "imagepoll" && (
        <ImagePoll onChange={(files) => console.log(files)} />
      )}
      {pollType === "ranking" && (
        <RankingPoll onChange={(options) => console.log(options)} />
      )}

      

      <FormControl>
        <FormLabel>Description</FormLabel>
        <Textarea
          focusBorderColor="green.400"
          placeholder="Tell audience about your poll..."
          value={description}
          onChange={(e) => setdescription(e.target.value)}
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
            <Radio colorScheme="green" value="public">Public</Radio>
            <Radio colorScheme="red" value="private">Private</Radio>
            <Radio value="unlisted">Unlisted</Radio>
          </HStack>
        </RadioGroup>
      </FormControl>

      <Divider my={4} />

      <Button width={{base: 'full', md: '30%'}} alignSelf={'end'} borderRadius={50} colorScheme="blue" onClick={handleCreatePoll}>
        Post 
      </Button>
    </VStack>
  );
};

export default CreatePoll;
