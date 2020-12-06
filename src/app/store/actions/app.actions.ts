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