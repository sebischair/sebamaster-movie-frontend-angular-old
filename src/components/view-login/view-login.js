'use strict';

import angular from 'angular';

import ViewLoginComponent from './view-login.component';


export default angular.module('ViewLogin', [])
    .component(ViewLoginComponent.name, new ViewLoginComponent);