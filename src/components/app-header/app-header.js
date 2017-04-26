'use strict';

import angular from 'angular';

import AppHeaderComponent from './app-header.component';


export default angular.module('AppHeader', [])
    .component(AppHeaderComponent.name, new AppHeaderComponent);