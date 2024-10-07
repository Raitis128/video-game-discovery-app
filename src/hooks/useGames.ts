import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  let platformIds = gameQuery.platform?.id;

  // If "PlayStation" is selected, use all sub-platform IDs
  if (gameQuery.platform?.id === 2) {
    // '2' is the PlayStation parent ID
    platformIds = parseInt([187, 18, 16, 15, 27, 19, 17].join(",")); // PlayStation sub-platform IDs
  }

  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: platformIds,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
};

export default useGames;
