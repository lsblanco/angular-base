import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';

import { ActionTypes } from '../actions';

@Injectable()
export class RequestEffect {

  constructor(
    private actions$: Actions,
  ) { }

  private getActionPrefix(action): string {
    return action.substr(0, action.indexOf('_'));
  }

  @Effect()
  private main$ = this.actions$
    .filter(action => action.payload && action.payload.request)
    .switchMap(action => action.payload.request
      .mergeMap((res: any) => Observable.of({
        type: `${this.getActionPrefix(action.type)}_SUCCESS`,
        payload: res
      })
      )
      .catch(err => Observable.of({
        type: `${this.getActionPrefix(action.type)}_ERROR`,
        payload: err
      }
      ))
    );
}
