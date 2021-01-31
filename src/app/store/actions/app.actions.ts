import { createAction, props } from '@ngrx/store';

export const checklogin = createAction(
  '[loginModule] checkLogin',
  props<{ isLoggedIn: boolean }>()
);

export const checkMobile = createAction(
  '[appModule] checkMobile',
  props<{ isMobile: boolean }>()
);

export const currentMangaLink = createAction(
  '[mangaModule] getLink',
  props<{ currentMangaLink: string }>()
);

export const currentMangaDetails = createAction(
  '[mangaModule] mangaDetails',
  props<{ mangaDetails: {} }>()
);

export const latestMangaList = createAction(
  '[mangaModule] mangaLatestList',
  props<{ latestList: {} }>()
);
export const genreMangaList = createAction(
  '[mangaModule] mangaGenreList',
  props<{ genreList: {} }>()
);

export const bookmarkedList = createAction(
  '[mangaModule] mangaBookmarkedList',
  props<{ bookMarkedList: {} }>()
);

export const userDetails = createAction(
  '[mangaModule] userDetails',
  props<{ userDetails: {} }>()
);

export const pageNoObject = createAction(
  '[mangaModule] pageNumbers',
  props<{ pageNoObj: {} }>()
);

export const refreshMangaPage = createAction(
  '[mangaModule] refreshMangaPage',
  props<{ refreshMangaPage: boolean }>()
);

export const refreshGenreListPage = createAction(
  '[mangaModule] refreshGenreListPage',
  props<{ refreshGenreListBool: boolean }>()
);

export const refreshHomePage = createAction(
  '[mangaModule] refreshHomePage',
  props<{ refreshHomePageBool: boolean }>()
);

export const refreshGenrePage = createAction(
  '[mangaModule] refreshGenrePage',
  props<{ refreshGenrePageBool: boolean }>()
);

export const currentSource = createAction(
  '[homeModule] currentSource',
  props<{ currentSource: string }>()
);

export const genreObject = createAction(
  '[mangaModule] genreObject',
  props<{ genreObj: {} }>()
);

export const prevScrollHeight = createAction(
  '[mangaModule] rememberScrollHeight',
  props<{ prevScrollHeight: number }>()
);

export const homeScrollHeight = createAction(
  '[mangaModule] homeScrollHeight',
  props<{ homeScrollHeight: number }>()
);

export const homeSearchString = createAction(
  '[searchModule] homeSearch',
  props<{ homeSearchString: string }>()
);

export const sourceObject = createAction(
  '[appModule] sourceOBJ',
  props<{ srcObj: {} }>()
);
