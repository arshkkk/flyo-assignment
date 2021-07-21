import { RequestActionType } from "../../types/common";

export const GET_MOVIES: RequestActionType = {
  INITIATE: "GET_MOVIES/INITIATE",
  SUCCESS: "GET_MOVIES/SUCCESS",
  ERROR: "GET_MOVIES/ERROR",
};
export const getMovies = () => ({
  type: GET_MOVIES.INITIATE,
});

// export const GET_INDIVIDUAL_MOVIE: RequestActionType = {
//   INITIATE: 'CREATE_NOTE/INITIATE',
//   SUCCESS: 'CREATE_NOTE/SUCCESS',
//   ERROR: 'CREATE_NOTE/ERROR',
// };
// export const getIndividualMovie = (slug: string) => ({
//   type: GET_MOVIES.INITIATE,
//   payload: {
//     slug,
//   },
// });
