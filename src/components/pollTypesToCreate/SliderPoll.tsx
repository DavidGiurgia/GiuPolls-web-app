import {
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

type SliderPollProps = {
  onChange: (value: number) => void;
};

const SliderPoll = ({ onChange }: SliderPollProps) => {
  const handleSliderChange = (value: number) => onChange(value);

  return (
    <FormControl>
      <FormLabel>Slider Poll</FormLabel>
      <Input marginBottom={3} placeholder="Enter your slider question..." />
      <Slider defaultValue={60} min={0} max={300} step={30} onChange={handleSliderChange}>
        <SliderTrack bg="red.100">
          <SliderFilledTrack bg="tomato" />
        </SliderTrack>
        <SliderThumb boxSize={6} />
      </Slider>
    </FormControl>
  );
};

export default SliderPoll;
