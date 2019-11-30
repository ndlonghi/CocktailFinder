import {Action} from "redux";
import {ThunkAction} from "redux-thunk";

import {RootState} from "../index";
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

export const searchCocktails = (searchText: string): ThunkAction<void, RootState, null, Action<string>> => async dispatch => {
  try {
    dispatch(fetchCocktails());
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURI(searchText)}`);
    if (response.status === 200) {
      const cocktails = await response.json();
      dispatch(receiveCocktails(cocktails.drinks.map((drink: any): Cocktail => (
        {
          idDrink: drink.idDrink,
          strDrink: drink.strDrink,
          strDrinkThumb: drink.strDrinkThumb
        }
        ))))
    } else {
      throw "Http Error";
    }
  } catch (e) {
    dispatch(fetchCocktailsError());
  }
};
