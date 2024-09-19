import {
  FormControl,
} from "@chakra-ui/react";
import EmojiButton from "../shared/EmojiButton";

type RatingPollProps = {
  onChange: (value: number) => void;
};

const RatingPoll = ({ onChange }: RatingPollProps) => {

  return (
    <FormControl>
      <EmojiButton placeholder="Type your question here..."/>

    
    </FormControl>
  );
};

export default RatingPoll;
