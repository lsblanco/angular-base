import './styles/styles.css';

import { AccountModule } from './containers/account/account.module';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { AppState } from 'base/store/';
import { BaseImports } from 'base/imports/';
import { BaseProviders } from 'base/providers/';
import { AppComponents } from './app.components';
import { AppComponent } from './app.component';

import { ToastyModule } from 'ng2-toasty';

export function translateLoaderFactory(http: Http) {
  return new TranslateStaticLoader(http, 'https://dev-estimate.einsanet.es/api/i18n', '.json');
}

import {
  TranslateLoader,
  TranslateModule,
  TranslateStaticLoader
} from 'ng2-translate/ng2-translate';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    AppComponents,
  ],
  imports: [
    BaseImports,
    BrowserModule,
    HttpModule,
    AccountModule,
    MaterialModule,
    ToastyModule.forRoot(),
    TranslateModule.forRoot(
      {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [Http]
      })
  ],
  providers: [BaseProviders],
})
export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private _store: Store<AppState>,
  ) {
    console.log('APP MODULE CONSTRUCTOR');
  }

}
