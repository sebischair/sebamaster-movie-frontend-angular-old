'use strict';

import angular from 'angular';

import AuthenticationService from './authentication.service';


export default angular.module('AuthenticationServiceDefinition', [])
    .service(AuthenticationService.name, AuthenticationService)