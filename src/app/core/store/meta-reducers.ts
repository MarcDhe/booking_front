// src/app/core/store/meta-reducers.ts

import { MetaReducer } from '@ngrx/store';
import { AppState } from './app.state';

/**
 * Exemple : logger global pour debug
 */
export const debugMetaReducer: MetaReducer<AppState> =
  reducer => (state, action) => {
    console.log('%c ACTION', 'color: #03A9F4', action);
    console.log('%c STATE AVANT', 'color: #9E9E9E', state);

    const nextState = reducer(state, action);

    console.log('%c STATE APRÈS', 'color: #4CAF50', nextState);

    return nextState;
  };

/**
 * Liste des meta-reducers
 */
export const metaReducers: MetaReducer<AppState>[] = [
  debugMetaReducer
];
