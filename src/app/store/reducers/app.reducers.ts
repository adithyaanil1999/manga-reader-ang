import { createReducer, on, Action } from '@ngrx/store';
import { checklogin,checkMobile,currentMangaLink } from '../actions/app.actions';

export const userFeatureKey = 'AppState';

const initalState ={
    loginBool : false,
    mobileBool : false
}

const reducerFunc = createReducer(
  initalState,
  on(checklogin, (state,{isLoggedIn}) => ({
    ...state,
    loginBool: isLoggedIn
  })),
  on(checkMobile, (state,{isMobile}) => ({
    ...state,
    mobileBool: isMobile
  })),
  on(currentMangaLink, (state,{currentMangaLink}) => ({
    ...state,
    currentMangaLink: currentMangaLink
  })),
);

export function reducer(state, action: Action) {
    return reducerFunc(state, action);
}