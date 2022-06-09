import { Box } from "@chakra-ui/react";
import React from "react";

type CardProps = {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Box
      borderWidth={1}
      borderTopRightRadius={10}
      maxW={400}
      paddingY={"10px"}
      paddingX={"10px"}
      my={"10px"}
    >
      {children}
    </Box>
  );
};
export default Card;
