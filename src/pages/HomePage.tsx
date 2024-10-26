import { Grid, Show, GridItem, Flex, HStack } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Flex justifyContent="space-between" flexWrap="wrap">
          <GameHeading />
          <HStack>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Flex>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
