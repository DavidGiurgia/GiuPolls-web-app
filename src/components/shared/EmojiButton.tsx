import { Button, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverBody, Grid, Box } from "@chakra-ui/react";


// Lista de emoji disponibile
const emojiList = ["😊", "😂", "😍", "😢", "👍", "🙏", "❤️", "🔥", "🎉", "💯"];

type EmojiButtonProps = {
  emoji: string;
  onEmojiSelect: (emoji: string) => void;
};

const EmojiButton = ({ emoji, onEmojiSelect }: EmojiButtonProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" colorScheme="gray" fontSize="24px">
          {emoji}
        </Button>
      </PopoverTrigger>
      <PopoverContent width="fit-content">
        <PopoverArrow />
        <PopoverBody>
          <Grid templateColumns="repeat(5, 1fr)" gap={2}>
            {emojiList.map((emojiOption) => (
              <Box
                key={emojiOption}
                fontSize="24px"
                cursor="pointer"
                onClick={() => onEmojiSelect(emojiOption)}
              >
                {emojiOption}
              </Box>
            ))}
          </Grid>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default EmojiButton;
