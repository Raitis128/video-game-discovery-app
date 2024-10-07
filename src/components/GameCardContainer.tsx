import { Box } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={{ sm: "1fr", lg: "300px" }}
      borderRadius={10}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
