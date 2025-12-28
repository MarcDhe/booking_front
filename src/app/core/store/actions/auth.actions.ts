import { createAction, props } from '@ngrx/store';

/**
 * LOGIN
 */
export const login = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any; token: string }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

/**
 * LOGOUT
 */
export const logout = createAction('[Auth] Logout');

/**
 * Exemple d’action pour rafraîchir le token
 */
export const refreshToken = createAction(
  '[Auth] Refresh Token',
  props<{ token: string }>()
);

export const refreshTokenSuccess = createAction(
  '[Auth] Refresh Token Success',
  props<{ token: string }>()
);

export const refreshTokenFailure = createAction(
  '[Auth] Refresh Token Failure',
  props<{ error: string }>()
);
