import { createReducer, on, Action } from '@ngrx/store';
import { checklogin,checkMobile } from '../actions/app.actions';

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
);

export function reducer(state, action: Action) {
    return reducerFunc(state, action);
}