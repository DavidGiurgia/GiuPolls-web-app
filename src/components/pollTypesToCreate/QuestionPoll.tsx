import { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { FileUploader } from "../shared";

type QuestionPollProps = {
  onChange: (value: string) => void;
};

const QuestionPoll = ({ onChange }: QuestionPollProps) => {
  // State pentru a stoca fișierele selectate
  const [files, setFiles] = useState<File[]>([]);

  // Funcție pentru a gestiona fișierele primite din FileUploader
  const handleFileChange = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    // Poți adăuga orice logic suplimentară pentru a procesa fișierele aici
    console.log("Selected files: ", selectedFiles);
  };

  return (
    <FormControl>
      <Input
      variant={'flushed'}
      marginBottom={3}
        focusBorderColor="purple.500"
        placeholder="Ask or write a message..."
        onChange={(e) => onChange(e.target.value)}
      />
      <FileUploader
        fieldChange={handleFileChange} // Funcția de gestionare a fișierelor
        mediaUrl=""
        width={"full"}
        height={"400px"}
      />
    </FormControl>
  );
};

export default QuestionPoll;
