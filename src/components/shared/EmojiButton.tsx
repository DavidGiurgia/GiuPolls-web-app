import { useState } from "react";
import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Grid,
  Box,
} from "@chakra-ui/react";
import { BsEmojiSmile } from "react-icons/bs"; // Pictograma pentru buton
import { Input } from "@chakra-ui/react";

const emojiList = ["😊", "😂", "😍", "😢", "👍", "🙏", "❤️", "🔥", "🎉", "💯"];

const EmojiButton = ({ placeholder }: { placeholder: string }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const addEmoji = (emoji: string) => {
    setInputValue((prev) => prev + emoji); // Adaugă emoji la input
  };

  return (
    <Box display="flex" alignItems="center">
      <Input
      focusBorderColor="yellow.400"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        size="md"
        width="100%"
        mr={2}
      />

      {/* Popover for Emoji Button */}
      <Popover>
        <PopoverTrigger>
          <IconButton
            icon={<BsEmojiSmile />}
            aria-label="Emoji Button"
            variant="outline"
            colorScheme="gray"
          />
        </PopoverTrigger>
        <PopoverContent width="fit">
          <PopoverArrow />
          <PopoverBody>
            <Grid templateColumns="repeat(5, 1fr)" gap={2}>
              {emojiList.map((emoji) => (
                <Box
                  key={emoji}
                  fontSize="24px"
                  cursor="pointer"
                  onClick={() => addEmoji(emoji)}
                >
                  {emoji}
                </Box>
              ))}
            </Grid>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default EmojiButton;
