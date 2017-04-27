'use strict';

import angular from 'angular';

import ViewProfileComponent from './view-profile.component';


export default angular.module('ViewProfile', [])
    .component(ViewProfileComponent.name, new ViewProfileComponent);