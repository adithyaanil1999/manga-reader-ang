import { createReducer, on, Action } from '@ngrx/store';
import {
  checklogin,
  checkMobile,
  currentMangaLink,
  currentMangaDetails,
  latestMangaList,
  refreshMangaPage,
  userDetails,
  pageNoObject,
  bookmarkedList,
  refreshHomePage,
  currentSource,
  genreObject,
  refreshGenrePage,
  prevScrollHeight,
  genreMangaList,
  refreshGenreListPage,
  sourceObject,
  homeScrollHeight,
  homeSearchString
} from '../actions/app.actions';

export const userFeatureKey = 'AppState';

const initalState = {
  loginBool: false,
  mobileBool: false,
  refreshMangaPageBool: true,
  latestObject: {},
  genreMangaObject: {},
  bookMarkedObj: {},
  userDetailObject: {},
  currentSource: '',
  refreshHomePageBool: false,
  refreshGenrePageBool: false,
  refreshGenreListBool: false,
  genreObj: {},
  prevScrollHeight: 0,
  homeScrollHeight:0,
  homeSearchString: ""
};

const reducerFunc = createReducer(
  initalState,
  on(checklogin, (state, { isLoggedIn }) => ({
    ...state,
    loginBool: isLoggedIn,
  })),
  on(checkMobile, (state, { isMobile }) => ({
    ...state,
    mobileBool: isMobile,
  })),
  on(currentMangaLink, (state, { currentMangaLink }) => ({
    ...state,
    currentMangaLink: currentMangaLink,
  })),
  on(currentMangaDetails, (state, { mangaDetails }) => ({
    ...state,
    mangaObject: mangaDetails,
  })),
  on(latestMangaList, (state, { latestList }) => ({
    ...state,
    latestObject: latestList,
  })),
  on(genreMangaList, (state, { genreList }) => ({
    ...state,
    genreMangaObject: genreList,
  })),
  on(refreshMangaPage, (state, { refreshMangaPage }) => ({
    ...state,
    refreshMangaPageBool: refreshMangaPage,
  })),
  on(refreshGenreListPage, (state, { refreshGenreListBool }) => ({
    ...state,
    refreshGenreListBool: refreshGenreListBool,
  })),
  on(userDetails, (state, { userDetails }) => ({
    ...state,
    userDetailObject: userDetails,
  })),
  on(pageNoObject, (state, { pageNoObj }) => ({
    ...state,
    pageNoObject: pageNoObj,
  })),
  on(bookmarkedList, (state, { bookMarkedList }) => ({
    ...state,
    bookMarkedObj: bookMarkedList,
  })),
  on(refreshHomePage, (state, { refreshHomePageBool }) => ({
    ...state,
    refreshHomePageBool: refreshHomePageBool,
  })),
  on(currentSource, (state, { currentSource }) => ({
    ...state,
    currentSource: currentSource,
  })),
  on(genreObject, (state, { genreObj }) => ({
    ...state,
    genreObj: genreObj,
  })),
  on(refreshGenrePage, (state, { refreshGenrePageBool }) => ({
    ...state,
    refreshGenrePageBool: refreshGenrePageBool,
  })),
  on(prevScrollHeight, (state, { prevScrollHeight }) => ({
    ...state,
    prevScrollHeight: prevScrollHeight,
  })),
  on(homeScrollHeight, (state, { homeScrollHeight }) => ({
    ...state,
    homeScrollHeight: homeScrollHeight,
  })),
  on(sourceObject, (state, { srcObj }) => ({
    ...state,
    srcOBJ: srcObj,
  })),
  on(homeSearchString, (state, { homeSearchString }) => ({
    ...state,
    homeSearchString: homeSearchString,
  }))
);

export function reducer(state, action: Action) {
  return reducerFunc(state, action);
}
