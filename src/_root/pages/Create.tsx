import {
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
} from "@chakra-ui/react";
import PollForm from "../../components/CreatePoll/PollForm";
import SurveyForm from "../../components/CreateSurvey/SurveyForm";

const Create = () => {
  return (
    <Box width="100%" maxWidth="800px" mx="auto" py={6}>
      <Heading as="h1" mb={4}>
        Create a Poll
      </Heading>

      <Tabs variant="soft-rounded" colorScheme="yellow">
        <TabList>
          <Tab>Short Poll</Tab>
          <Tab>Survey</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PollForm />
          </TabPanel>
          <TabPanel>
            <SurveyForm />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Create;
