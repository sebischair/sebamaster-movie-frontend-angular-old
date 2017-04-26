'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import Routes from './config/routes';

import AppView from './components/app-view/app-view';
import MoviesView from './components/movies-view/movies-view';
import MovieView from './components/movie-view/movie-view';
import MovieEditView from './components/movie-edit-view/movie-edit-view';
import ProfileView from './components/profile-view/profile-view';
import RegisterView from './components/register-view/register-view';
import LoginView from './components/login-view/login-view';

let appModule = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    AppView.name,
    MoviesView.name,
    MovieView.name,
    MovieEditView.name,
    ProfileView.name,
    RegisterView.name,
    LoginView.name
]);

appModule.config(Routes);

angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;