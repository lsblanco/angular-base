import { ActionReducer, Store} from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '../interfaces/action';

export function RequestMiddleware(next: ActionReducer<any>): ActionReducer<any> {
  return  (state, action ) => {
    return next(state, action);
  };
}
