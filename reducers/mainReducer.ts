import {
  SET_ERROR,
  SET_LOADING_STATUS,
  SET_MOVIES,
  SET_NUMBER_OF_PAGES,
  SET_SEARCH_QUERY,
} from "../constants/actionTypes";
import { ActionInterface } from "../typescript/interfaces";

export const INITIAL_STATE = {
  loading: false,
  movies: [],
  error: "",
  searchQuery: "",
};

export const mainReducer = (state = INITIAL_STATE, action: ActionInterface) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING_STATUS:
      return { ...state, loading: action.payload };
    case SET_NUMBER_OF_PAGES:
      return { ...state, pages: action.payload };
    case SET_SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};
