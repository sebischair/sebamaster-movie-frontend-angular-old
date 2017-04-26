'use strict';

import angular from 'angular';

import AppViewComponent from './app-view.component';


export default angular.module('AppView', [])
    .component(AppViewComponent.name, new AppViewComponent);