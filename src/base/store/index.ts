import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { RouterState } from '@ngrx/router-store';

import * as base from '../';
import { MainState } from '../models';
import { RequestMiddleware } from '../middleware/requestMiddleware';

export interface AppState {
  router: RouterState;
  main: MainState;
};

export function configureStore(rootReducer) {
  if (base.ENV === 'development') {
    return compose(RequestMiddleware, storeFreeze, storeLogger())(rootReducer);
  } else {
    return compose(RequestMiddleware)(rootReducer);
  }
}
