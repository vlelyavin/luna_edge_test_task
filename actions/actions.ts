import {
  SET_MOVIES,
  SET_ERROR,
  SET_LOADING_STATUS,
  SET_NUMBER_OF_PAGES,
  SET_SEARCH_QUERY,
} from "../constants/actionTypes";
import { DetailedMovieInfoInterface } from "../typescript/interfaces";

export const setMovies = (movies: Array<DetailedMovieInfoInterface>) => ({
  type: SET_MOVIES,
  payload: movies,
});

export const setError = (error: string) => ({
  type: SET_ERROR,
  payload: error,
});

export const setNumberOfPages = (number: number) => ({
  type: SET_NUMBER_OF_PAGES,
  payload: number,
});

export const setSearchQuery = (query: string) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});
