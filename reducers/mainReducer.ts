import { ADD_TO_SAVED, SET_ERROR, SET_MOVIES, SET_NUMBER_OF_PAGES, SET_SEARCH_QUERY } from "../constants/actionTypes";
import { ActionInterface, StateInterface } from "../typescript/interfaces";

export const INITIAL_STATE = {
  movies: [],
  error: "",
  searchQuery: "",
  savedMovies: [],
  pages: 0,
};

export const mainReducer = (state: StateInterface = INITIAL_STATE, action: ActionInterface) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_NUMBER_OF_PAGES:
      return { ...state, pages: action.payload };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case ADD_TO_SAVED:
      return { ...state, savedMovies: [...state.savedMovies, action.payload] };
    default:
      return state;
  }
};
