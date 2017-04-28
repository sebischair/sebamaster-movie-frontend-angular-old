'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import AuthenticationService from './services/authentication/authentication';
import MoviesService from './services/movies/movies';

import Routes from './config/routes';

import AppContent from './components/app-content/app-content';
import ViewMovies from './components/view-movies/view-movies';
import ViewMovie from './components/view-movie/view-movie';
import ViewMovieEdit from './components/view-movie-edit/view-movie-edit';
import ViewProfile from './components/view-profile/view-profile';
import ViewRegister from './components/view-register/view-register';
import ViewLogin from './components/view-login/view-login';

let appModule = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    AuthenticationService.name,
    MoviesService.name,
    AppContent.name,
    ViewMovies.name,
    ViewMovie.name,
    ViewMovieEdit.name,
    ViewProfile.name,
    ViewRegister.name,
    ViewLogin.name
]);


appModule.config(Routes);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [appModule.name], {
        strictDi: true
    });
});

export default appModule;