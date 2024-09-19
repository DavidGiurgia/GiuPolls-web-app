import { Box } from "@chakra-ui/react";
import React from "react";

const Logo: React.FC = () => {
  const textColor = '#F6E05E';

  return (
    <Box
      as="svg"
      viewBox="0 0 200 50"
      width="200px"
      height="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text x="10" y="35" fontWeight={'600'} fontFamily="" fontSize="32" fill={textColor}>
        giupolls
      </text>
    </Box>
  );
};

export default Logo;
