'use strict';

import MoviesComponent from '../components/movies-view/movies-view.component';
import MovieComponent from '../components/movie-view/movie-view.component';
import MovieEditComponent from '../components/movie-edit-view/movie-edit-view.component';
import ProfileComponent from './../components/profile-view/profile-view.component';
import RegisterComponent from './../components/register-view/register-view.component';
import LoginComponent from './../components/login-view/login-view.component';

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/movies");

    $stateProvider
        .state('movies', {
            url: '/movies',
            component: MoviesComponent.name,
        })
        .state('movie', {
            url: '/movie',
            component: MovieComponent.name,
        })
        .state('movieEdit', {
            url: '/movie-edit',
            component: MovieEditComponent.name,
        })
        .state('profile', {
            url: '/profile',
            component: ProfileComponent.name,
        })
        .state('register', {
            url: '/register',
            component: RegisterComponent.name,
        })
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })


}


export default config;