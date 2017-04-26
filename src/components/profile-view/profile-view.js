'use strict';

import angular from 'angular';

import ProfileViewComponent from './profile-view.component';


export default angular.module('ProfileView', [])
    .component(ProfileViewComponent.name, new ProfileViewComponent);