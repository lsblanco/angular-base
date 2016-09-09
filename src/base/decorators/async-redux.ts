import { Action, combineReducers } from 'redux';
//  FIXME: This won't work; we need a callable method to get the reducers properly'
import { BaseReducers } from '../../base';
import { AppState } from '../../base/store';

export interface AsyncReduxOptions {
    reducers: { [index: string]: Action },
    epics: { [index: string]: string[] },
    redux?: string
    store?: string
}

function AsyncRedux(options: AsyncReduxOptions) {
    return function (target: Function) {

        let constructor = function () {
            target.apply(this);
            this.asyncReduxInit();
        };

        constructor.prototype = Object.create(target.prototype);
        constructor.prototype.constructor = target;

        constructor.prototype.epics = [];
        constructor.prototype.asyncReduxInit = () => {
            if(!this.asyncReduxChecks()) return;
            this.asyncReduxMapEpics();
            this.asyncReduxMepReducers();
            this.asyncReduxReconfigure();
        }

        constructor.prototype.asyncReduxChecks = () => {
            if (!this.ngRedux && !this[options.redux]) {
                console.error("You must inject ngRedux to use AsyncRedux decorator");
                return false;
            }
            if (!this.store && !this[options.store]) {
                console.error("You must inject a Redux store to use AsyncRedux decorator");
                return false;
            }
            for (var key in options.epics) {
                if (!this[key]) {
                    console.error(`You must inject a ${key} service to declare an epic for it`);
                    return false;
                } else {
                    for (var i = 0; i < options.epics[key].length; i++) {
                        if (!this[key][options.epics[key][i]]) {
                            console.error(`${key} doesn't have a method ${options.epics[key][i]}`);
                            return false;
                        }
                    }
                }
            }
        }

        constructor.prototype.asyncReduxMapEpics = () => {
            for(var key in options.epics) {
                this.asyncReduxMapEpicMethods(this[key], options.epics[key])
            }
            
        }

        constructor.prototype.asyncReduxMapEpicMethods = (service:any, methods: string[]) => {
            methods.forEach((method) => this.epics.push(service[method]));
        }

        constructor.prototype.asyncReduxMapReducers = () => {
            this.reducers = options.reducers;
        }

        constructor.prototype.asyncReduxReconfigure = () => {
            this.ngRedux.replaceReducer(combineReducers<AppState>(Object.assign(BaseReducers, this.reducers)));
            this.epics.forEach((epic) => this.store.epic$.nexts(epic));
        }
        return <any>constructor;
            
    }
}

export default AsyncRedux;
