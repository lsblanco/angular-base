import 'reflect-metadata';

import {platformBrowser} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Application } from './application';

platformBrowserDynamic().bootstrapModule(Application);
