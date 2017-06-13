'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';

import MoviesService from './services/movies/movies';
import UserService from './services/user/user';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewMovies from './components/view-movies/view-movies';
import ViewMovie from './components/view-movie/view-movie';
import ViewMovieEdit from './components/view-movie-edit/view-movie-edit';
import ViewMovieCreate from './components/view-movie-create/view-movie-create';
import ViewLogin from './components/view-login/view-login';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMdIcons,
    UserService.name,
    MoviesService.name,
    AppContent.name,
    ViewMovies.name,
    ViewMovie.name,
    ViewMovieEdit.name,
    ViewMovieCreate.name,
    ViewLogin.name
]);

app.constant('API_URL', 'http://localhost:3000/api');
app.config(Routes);
app.config(Middlewares);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;