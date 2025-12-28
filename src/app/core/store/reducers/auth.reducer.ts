// src/app/core/store/reducers/auth.reducer.ts

import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';

/**
 * STATE
 */
export interface AuthState {
  user: any | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

/**
 * INITIAL STATE
 */
export const initialAuthState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

/**
 * REDUCER
 */
export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, state => ({
    ...state,
    loading: true,
    error: null
  })),

  on(AuthActions.loginSuccess, (state, { user, token }) => ({
    ...state,
    user,
    token,
    isAuthenticated: true,
    loading: false
  })),

  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  })),

  on(AuthActions.logout, () => initialAuthState)
);
