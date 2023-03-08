import { SET_ERROR, SET_LOADING_STATUS, SET_MOVIES } from "../constants/actionTypes";
import { ActionInterface, StateInterface } from "../typescript/interfaces";

export const INITIAL_STATE = {
  isLoading: false,
  movies: [],
  error: "",
};

export const mainReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_LOADING_STATUS:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
