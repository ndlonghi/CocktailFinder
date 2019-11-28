export const RECEIVE_COCKTAILS = 'RECEIVE_COCKTAILS';
export const FETCH_COCKTAILS = 'FETCH_COCKTAILS';
export const FETCH_COCKTAILS_ERROR = 'FETCH_COCKTAILS_ERROR';

export interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

export interface CocktailsState {
  cocktails: Cocktail[];
  meta: {
    fetching: boolean;
    error: boolean;
  }
}

interface ReceiveCocktailsAction {
  type: typeof RECEIVE_COCKTAILS;
  payload: Cocktail[];
}

interface FetchCocktailsAction {
  type: typeof FETCH_COCKTAILS;
}

interface FetchCocktailsErrorAction {
  type: typeof FETCH_COCKTAILS_ERROR;
}

export type CocktailsActionTypes = ReceiveCocktailsAction | FetchCocktailsAction | FetchCocktailsErrorAction;
