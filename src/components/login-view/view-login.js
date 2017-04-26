'use strict';

import angular from 'angular';

import LoginViewComponent from './login-view.component';


export default angular.module('LoginView', [])
    .component(LoginViewComponent.name, new LoginViewComponent);