import { CiImageOn } from "react-icons/ci";

import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { convertFileToUrl } from "../../services/utils";

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
  width: string;
};

const FileUploader = ({
  fieldChange,
  mediaUrl,
  width
}: FileUploaderProps) => {
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      fieldChange(acceptedFiles);
      setFileUrl(convertFileToUrl(acceptedFiles[0]));
    },
    [fieldChange]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpeg", ".jpg"],
    },
  });

  return (
    <Box
      width={width}
      height='auto'
      {...getRootProps()}
      bg="gray.700"
      borderRadius="xl"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      aspectRatio="4/3" // sau 16/9 sau 1/1
      position="relative"
      maxWidth="100%"
    >
      <input {...getInputProps()} style={{ display: "none" }} />

      {fileUrl ? (
        <Box
          width="100%"
          height="100%"
          overflow="hidden"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Image
            src={fileUrl}
            alt="image"
            width="100%"
            height="100%"
            objectFit="cover" // Sau 'contain' dacă dorești să vezi întreaga imagine
          />
          {/* Adaugă un overlay pentru drag & drop */}
        </Box>
      ) : (
        <VStack padding={'80px'} spacing={4}>
          <CiImageOn color="white" fontSize={"50px"} />
          <Text textAlign={"center"} fontSize="lg" color="gray.200">
            Drag photo here or <br />
            <Text color="yellow.400">
              <strong>select from your computer</strong>
            </Text>
          </Text>
          <Text fontSize="sm" color="gray.400">
            SVG, PNG, JPG
          </Text>
        </VStack>
      )}
    </Box>
  );
};

export default FileUploader;
