'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import MoviesService from './services/movies/movies';

import Routes from './config/routes';
import middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewMovies from './components/view-movies/view-movies';
import ViewMovie from './components/view-movie/view-movie';
import ViewMovieEdit from './components/view-movie-edit/view-movie-edit';
import ViewProfile from './components/view-profile/view-profile';
import ViewRegister from './components/view-register/view-register';
import ViewLogin from './components/view-login/view-login';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    MoviesService.name,
    AppContent.name,
    ViewMovies.name,
    ViewMovie.name,
    ViewMovieEdit.name,
    ViewProfile.name,
    ViewRegister.name,
    ViewLogin.name
]);

app.constant('API_URL', 'http://3f47ea84.ngrok.io/api/');
app.config(Routes);
app.config(middlewares);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;