import { createAction, props } from '@ngrx/store';

export const checklogin = createAction(
  '[loginModule] checkLogin',
  props<{ isLoggedIn: boolean}>()
);

export const checkMobile = createAction(
    '[appModule] checkMobile',
    props<{ isMobile: boolean}>()
);

export const currentMangaLink = createAction(
  '[mangaModule] getLink',
  props<{ currentMangaLink: string}>()
);

export const currentMangaDetails = createAction(
  '[mangaModule] mangaDetails',
  props<{ mangaDetails: {}}>()
);

export const latestMangaList = createAction(
  '[mangaModule] mangaLatestList',
  props<{ latestList: {}}>()
);

export const userDetails = createAction(
  '[mangaModule] userDetails',
  props<{ userDetails: {}}>()
);

export const refreshMangaPage = createAction(
  '[mangaModule] refreshMangaPage',
  props<{ refreshMangaPage: boolean}>()
);

