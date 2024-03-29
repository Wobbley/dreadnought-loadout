/*
 * Providers provided by Angular
 */
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {enableProdMode} from 'angular2/core';

/*
 * App Component
 * our top level component that holds all of our components
 */
import {LoadoutComponent} from './app/loadout.component';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
enableProdMode(); // include for production builds
function main() {
  return bootstrap(LoadoutComponent, [
    // These are dependencies of our App
    HTTP_PROVIDERS,
    ROUTER_PROVIDERS
  ])
  .catch(err => console.error(err));
}

document.addEventListener('DOMContentLoaded', main);
