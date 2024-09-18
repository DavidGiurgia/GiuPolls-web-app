import React from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

const Logo: React.FC = () => {
  const textColor = useColorModeValue("black", "white");

  return (
    <Box
        as="svg"
        viewBox="0 0 200 50"
        width="200px"
        height="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="10"
          y="35"
          fontFamily="Arial, sans-serif"
          fontSize="30"
          fill={textColor}
        >
          GiuPolls
        </text>
      </Box>
  );
};

export default Logo;
