'use strict';

import angular from 'angular';

import AppHeader from './../app-header/app-header';
import AppFooter from './../app-footer/app-footer';

import AppViewComponent from './app-view.component';


export default angular.module('AppView', [
        AppHeader.name,
        AppFooter.name
    ])
    .component(AppViewComponent.name, new AppViewComponent);