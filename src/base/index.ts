import { Store } from '@ngrx/store';

import { State } from './state';
import { Action } from './interfaces';
import { ENV } from './shared/Env';
import * as console from './shared/console';
import { createReducer } from './shared/CreateReducer';
import { createActionType } from './shared/CreateActionType';

export { Store, State, Action, createReducer, console, ENV, createActionType };