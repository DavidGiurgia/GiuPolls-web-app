import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  IconButton,
  useToast,
  Heading,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { DeleteIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  ImagePoll,
  QuestionPoll,
  QuizPoll,
  RatingPoll,
  TextPoll,
  RankingPoll,
} from "../pollTypesToCreate";

const CreateSurvey = () => {
  const [polls, setPolls] = useState<any[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [tags, setTags] = useState<string>("");
  const [visibility, setVisibility] = useState<string>("public");
  const [activeTab, setActiveTab] = useState<number>(0);
  const toast = useToast();

  const addNewPoll = (pollType: string) => {
    if (polls.length >= 10) {
      toast({
        title: "Limit reached",
        description: "You can't add more than 10 polls.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setPolls([...polls, { type: pollType, data: {} }]);
    setActiveTab(polls.length); // Switch to the newly added poll
  };

  const removePoll = (index: number) => {
    const updatedPolls = [...polls];
    updatedPolls.splice(index, 1);
    setPolls(updatedPolls);
    if (activeTab >= updatedPolls.length) {
      setActiveTab(updatedPolls.length - 1);
    }
  };

  const handlePollChange = (index: number, data: any) => {
    const updatedPolls = [...polls];
    updatedPolls[index].data = data;
    setPolls(updatedPolls);
  };

  const handleSubmit = () => {
    // Submit survey logic here
    console.log({ title, description, tags, visibility, polls });
  };

  return (
    <Box width="100%" maxWidth="800px" mx="auto" py={6}>
      <VStack spacing={4} align="stretch">
        <FormControl>
          <FormLabel>Survey Title</FormLabel>
          <Input
            focusBorderColor="purple.500"
            placeholder="Enter the survey title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Description</FormLabel>
          <Textarea
            maxLength={250}
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
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
              <Radio value="unlisted">Unlisted</Radio>
            </HStack>
          </RadioGroup>
        </FormControl>

        <Divider my={4} />

        <Heading as="h2" size="md">
          Polls ({polls.length}/10)
        </Heading>

        <Tabs
          variant={"soft-rounded"}
          index={activeTab}
          onChange={setActiveTab}
        >
          <TabList>
            {polls.map((poll, index) => (
              <Tab
                key={index}
                display={"flex"}
                justifyContent={"space-between"}
              >
                {polls[index].type}
                <IconButton
                  ml={3}
                  icon={<DeleteIcon />}
                  size="xs"
                  color="red"
                  aria-label="Remove Poll"
                  onClick={(e) => {
                    e.stopPropagation();
                    removePoll(index);
                  }}
                />
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {polls.map((poll, index) => (
              <TabPanel key={index}>
                {poll.type === "Question" && (
                  <QuestionPoll
                    onChange={(data) => handlePollChange(index, data)}
                  />
                )}
                {poll.type === "Text poll" && (
                  <TextPoll
                    onChange={(data) => handlePollChange(index, data)}
                  />
                )}
                {poll.type === "Quiz" && (
                  <QuizPoll
                    onChange={(data) => handlePollChange(index, data)}
                  />
                )}
                {poll.type === "Rating" && (
                  <RatingPoll
                    onChange={(data) => handlePollChange(index, data)}
                  />
                )}
                {poll.type === "Image poll" && (
                  <ImagePoll
                    onChange={(data) => handlePollChange(index, data)}
                  />
                )}
                {poll.type === "Ranking" && (
                  <RankingPoll
                    onChange={(data) => handlePollChange(index, data)}
                  />
                )}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>

        {polls.length < 10 && (
          <HStack spacing={3} mt={4}>
            <Menu>
              <MenuButton
                as={Button}
                colorScheme="yellow"
                rightIcon={<ChevronDownIcon />}
              >
                Add poll
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => addNewPoll("Question")}>
                  Question
                </MenuItem>
                <MenuItem onClick={() => addNewPoll("Text poll")}>
                  Text Poll
                </MenuItem>
                <MenuItem onClick={() => addNewPoll("Quiz")}>Quiz</MenuItem>
                <MenuItem onClick={() => addNewPoll("Rating")}>Rating</MenuItem>
                <MenuItem onClick={() => addNewPoll("Image poll")}>
                  Image Poll
                </MenuItem>
                <MenuItem onClick={() => addNewPoll("Ranking")}>
                  Ranking
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        )}

        <Divider my={4} />

        <Button colorScheme="blue" mt={4} onClick={handleSubmit}>
          Post Survey
        </Button>
      </VStack>
    </Box>
  );
};

export default CreateSurvey;
