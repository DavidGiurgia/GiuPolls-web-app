import { FormControl, FormLabel, Input } from "@chakra-ui/react";

type QuestionPollProps = {
  onChange: (value: string) => void;
};

const QuestionPoll = ({ onChange }: QuestionPollProps) => {
  return (
    <FormControl>
      <FormLabel>Enter your question</FormLabel>
      <Input placeholder="Type your question here..." onChange={(e) => onChange(e.target.value)} />
    </FormControl>
  );
};

export default QuestionPoll;
