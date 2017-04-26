'use strict';

import angular from 'angular';

import RegisterViewComponent from './register-view.component';


export default angular.module('RegisterView', [])
    .component(RegisterViewComponent.name, new RegisterViewComponent);