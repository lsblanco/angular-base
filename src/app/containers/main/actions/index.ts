import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '../../../../base/interfaces/action';
import { ActionTypes } from '../action-types';
import { MainService } from '../services/main-service';

@Injectable()
export class MainActions {

  constructor(
    private mainService: MainService,
  ) { }

  public mainRequest(): Action {
    return {
      type: ActionTypes.MAIN_REQUEST,
      payload: {
        request: this.mainService.getData(),
      }
    };
  }

};
