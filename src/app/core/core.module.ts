// src/app/core/core.module.ts

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './store/reducers';
import { metaReducers } from './store/meta-reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    // EffectsModule.forRoot([]), // A CHECK POUVOIR 
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule doit être importé une seule fois (AppModule)'
      );
    }
  }
}
