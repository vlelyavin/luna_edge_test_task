import { SET_MOVIES, SET_ERROR, SET_LOADING_STATUS } from "../constants/actionTypes";
import { DetailedMovieInfoInterface } from "../typescript/interfaces";

export const setMovies = (movies: Array<DetailedMovieInfoInterface>) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setError = (error: string) => ({
  type: SET_ERROR,
  payload: error,
});

export const setLoadingStatus = (status: boolean) => ({
  type: SET_LOADING_STATUS,
  payload: status,
});
