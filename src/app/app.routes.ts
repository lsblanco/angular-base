import { Routes } from '@angular/router';
import * as containers from './containers';

export const routes: Routes = [
   { path: '', component: containers.MainContainer },
   { path: 'calculator', component: containers.CalculatorContainer },
   { path: 'weatherStations', component: containers.WeatherStationContainer },
   { path: 'lazy', loadChildren: './containers/+lazy/lazy.module#LazyModule' }
];