import {CocktailsActionTypes, CocktailsState, FETCH_COCKTAILS, FETCH_COCKTAILS_ERROR, RECEIVE_COCKTAILS} from "./types";

const initialState: CocktailsState = {
  cocktails: [],
  meta: {
    fetching: false,
    error: false
  }
};

export function cocktailsReducer(
  state: CocktailsState = initialState,
  action: CocktailsActionTypes
): CocktailsState {
  switch (action.type) {
    case RECEIVE_COCKTAILS: {
      return {
        ...state,
        cocktails: action.payload
      }
    }
    case FETCH_COCKTAILS: {
      return {
        ...state,
        meta: {
          ...state.meta, // In this case both properties in meta are overwritten, but if another property is added in the future it will be kept thanks to this
          fetching: true,
          error: false
        }
      }
    }
    case FETCH_COCKTAILS_ERROR: {
      return {
        ...state,
        meta: {
          ...state.meta,
          error: true
        }
      }
    }
    default: {
      return state;
    }
  }
}
