import { useState } from "react";
import { Button, ButtonGroup, Box } from "@chakra-ui/react";

// Define the type of the props
interface ChoiceButtonsProps {
  options: string[]; // The options are an array of strings
  onSelectionChange?: (selectedOption: string) => void; // Optional callback function
}

const ChoiceButtons = ({ options, onSelectionChange }: ChoiceButtonsProps) => {
  const [selected, setSelected] = useState<string | null>(options[0]);

  const handleClick = (option: string) => {
    setSelected(option);
    if (onSelectionChange) {
      onSelectionChange(option); // Notify parent component
    }
  };

  return (
    <Box >
      <ButtonGroup isAttached>
        {options.map((option) => (
          <Button
            key={option}
            variant={selected === option ? "solid" : "solid"}
            colorScheme={selected === option ? "yellow" : "gray"}
            onClick={() => handleClick(option)}
          >
            {option}
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default ChoiceButtons;
