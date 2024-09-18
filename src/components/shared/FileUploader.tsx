import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa6";
import {
  Box,
  Button,
  Image,
  Text,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { convertFileToUrl } from "../../lib/utils";

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  mediaUrl: string;
};

const FileUploader = ({ fieldChange, mediaUrl }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string>(mediaUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
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
      width='fit' // lățime fixă
      height="250px" // înălțime fixă
      {...getRootProps()}
      bg="gray.700"
      borderRadius="xl"
      cursor="pointer"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <input {...getInputProps()} style={{ display: "none" }} />

      {fileUrl ? (
        <>
          <Flex
            align="center"
            justify="center"
            w="full"
            h="full" // asigură-te că Flex-ul umple întregul box
          >
            <Image
              src={fileUrl}
              alt="image"
              width="100%"
              height="100%"
              objectFit="cover" // imaginea va acoperi întreaga zonă
              borderRadius="md"
            />
          </Flex>
        </>
      ) : (
        <VStack spacing={4}>
          <FaUpload style={{ fontSize: '24px', marginTop: '50px' }} />
          <Text fontSize="lg" color="gray.200">
            Drag photo here
          </Text>
          <Text fontSize="sm" color="gray.400">
            SVG, PNG, JPG
          </Text>
          <Button width={'90%'} colorScheme="yellow">Select from computer</Button>
        </VStack>
      )}
    </Box>
  );
};

export default FileUploader;
