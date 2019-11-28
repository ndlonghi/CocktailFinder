import {Cocktail, CocktailsActionTypes, FETCH_COCKTAILS, FETCH_COCKTAILS_ERROR, RECEIVE_COCKTAILS} from "./types";

export function receiveCocktails(cocktails: Cocktail[]): CocktailsActionTypes {
  return {
    type: RECEIVE_COCKTAILS,
    payload: cocktails
  }
}

export function fetchCocktails(): CocktailsActionTypes {
  return {
    type: FETCH_COCKTAILS
  }
}

export function fetchCocktailsError(): CocktailsActionTypes {
  return {
    type: FETCH_COCKTAILS_ERROR
  }
}
