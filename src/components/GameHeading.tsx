import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platform = usePlatform(gameQuery.platformId);
  const genre = useGenre(gameQuery.genreId);

  const heading = `${genre?.name || ""} ${platform?.name || ""}  Games`;

  return (
    <Heading as="h1" p={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
