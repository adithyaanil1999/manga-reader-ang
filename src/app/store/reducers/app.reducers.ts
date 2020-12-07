import { createReducer, on, Action } from '@ngrx/store';
import { 
  checklogin,
  checkMobile,
  currentMangaLink,
  currentMangaDetails,
  latestMangaList
  } from '../actions/app.actions';

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
  on(currentMangaDetails, (state,{mangaDetails}) => ({
    ...state,
    mangaObject: mangaDetails
  })),
  on(latestMangaList, (state,{latestList}) => ({
    ...state,
    latestObject: latestList
  })),
);

export function reducer(state, action: Action) {
    return reducerFunc(state, action);
}