'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import Routes from './config/routes';

import AppView from './components/app-view/app-view';
import MoviesView from './components/movies-view/movies-view';
import ProfileView from './components/profile-view/profile-view';


let appModule = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    AppView.name,
    MoviesView.name,
    ProfileView.name
]);

appModule.config(Routes);

angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;