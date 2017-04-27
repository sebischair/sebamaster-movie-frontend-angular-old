'use strict';

import angular from 'angular';

import ViewRegisterComponent from './view-register.component';


export default angular.module('ViewRegister', [])
    .component(ViewRegisterComponent.name, new ViewRegisterComponent);