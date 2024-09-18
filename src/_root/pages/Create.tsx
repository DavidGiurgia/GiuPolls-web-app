import { useState } from "react";
import {
  Box,
  VStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Button,
  FormControl,
  FormLabel,
  Select,
  Textarea,
  RadioGroup,
  Radio,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import {
  ImagePoll,
  QuestionPoll,
  QuizPoll,
  SliderPoll,
  TextPoll,
  VersusPoll,
} from "../../components/pollTypesToCreate";

const Create = () => {
  const [pollType, setPollType] = useState<string>("question");
  const [visibility, setVisibility] = useState<string>("public");
  const [tags, setTags] = useState<string>("");
  const [caption, setCaption] = useState<string>("");

  const handleCreatePoll = () => {
    // Handle poll creation logic
    console.log({ pollType, visibility, tags, caption });
  };

  return (
    <Box width="100%" maxWidth="800px" mx="auto" py={6}>
      <Heading as="h1" mb={4}>
        Create a Poll
      </Heading>

      <Tabs variant="soft-rounded" colorScheme="yellow">
        <TabList>
          <Tab>Short poll</Tab>
          <Tab>Survey</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <VStack spacing={4} align="stretch">
              <FormControl>
                <FormLabel>Select Poll Type</FormLabel>
                <Select
                  value={pollType}
                  onChange={(e) => setPollType(e.target.value)}
                >
                  <option value="question">Question</option>
                  <option value="textpoll">Text Poll</option>
                  <option value="quiz">Quiz</option>
                  <option value="slider">Slider</option>
                  <option value="imagepoll">Image Poll</option>
                  <option value="versus">Versus</option>
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
              {pollType === "slider" && (
                <SliderPoll onChange={(value) => console.log(value)} />
              )}
              {pollType === "imagepoll" && (
                <ImagePoll onChange={(files) => console.log(files)} />
              )}
              {pollType === "versus" && (
                <VersusPoll onChange={(files) => console.log(files)} />
              )}

              {/* Additional Settings */}
              <FormControl>
                <FormLabel>Visibility</FormLabel>
                <RadioGroup value={visibility} onChange={setVisibility}>
                  <HStack spacing={4}>
                    <Radio value="public">Public</Radio>
                    <Radio value="private">Private</Radio>
                  </HStack>
                </RadioGroup>
              </FormControl>

              <FormControl>
                <FormLabel>Caption</FormLabel>
                <Textarea
                  maxLength={150}
                  placeholder="Add a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Tags</FormLabel>
                <Input
                  placeholder="Add tags separated by commas..."
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </FormControl>

              <Button colorScheme="yellow" onClick={handleCreatePoll}>
                Create Poll
              </Button>
            </VStack>
          </TabPanel>

          <TabPanel>
            <Heading as="h2" size="md">
              Create a Survey
            </Heading>
            <Text>"Survey creation coming soon!"</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Create;
