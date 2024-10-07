import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return null;
  }

  return (
    <List padding={5}>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack spacing={4} alignItems="center">
            <Image
              boxSize="50px"
              src={genre.image_background}
              alt={genre.name}
              borderRadius={8}
              fit={"cover"}
            />
            <Button
              colorScheme={selectedGenre?.id === genre.id ? "teal" : undefined}
              onClick={() => onSelectGenre(genre)}
              fontSize="lg"
              variant="link"
              whiteSpace="normal"
              textAlign="left"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
