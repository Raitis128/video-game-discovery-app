import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return null;
  }

  return (
    <>
      <Heading pt={5} pb={5} fontSize={"2xl"}>
        Genres
      </Heading>
      <List>
        {data?.results?.map((genre) => (
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
                colorScheme={selectedGenreId === genre.id ? "teal" : undefined}
                onClick={() => setGenreId(genre.id)}
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
    </>
  );
};

export default GenreList;
