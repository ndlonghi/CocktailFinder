import {combineReducers, createStore} from "redux";

import {cocktailsReducer} from "./cocktails/reducers";

// Combining reducers is actually unnecesary since there is only one reducer, but we won't have to change anything other than adding other reducers if the app grows
const rootReducer = combineReducers({
  cocktails: cocktailsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer
);
