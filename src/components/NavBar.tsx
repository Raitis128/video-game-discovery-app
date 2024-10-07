import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent="space-between" pl={3} pr={5} pt={5}>
      <Image src={logo} boxSize="60px" />
      <HStack>
        <SearchInput onSearch={onSearch} />
        <ColorModeSwitch />
      </HStack>
    </HStack>
  );
};

export default NavBar;
