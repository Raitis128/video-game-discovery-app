import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAtributes from "../components/GameAtributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading pb={5}>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GridItem pb={5}>
          <GameAtributes game={game} />
        </GridItem>
        <GameTrailer gameId={game.id} />
      </GridItem>
      <GameScreenshots gameId={game.id} />
    </SimpleGrid>
  );
};

export default GameDetailPage;
