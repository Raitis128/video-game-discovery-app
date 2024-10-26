import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" pl={3} pr={5} pt={5}>
      <Box boxSize="60px">
        <Link to="/">
          <Image src={logo} />
        </Link>
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
