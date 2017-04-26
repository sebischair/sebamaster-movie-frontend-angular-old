'use strict';

import MoviesComponent from '../components/movies-view/movies-view.component';
import ProfileComponent from './../components/profile-view/profile-view.component';


config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/movies");

    $stateProvider
        .state('movies', {
            url: '/movies',
            component: MoviesComponent.name,
        })
        .state('profile', {
            url: '/profile',
            component: ProfileComponent.name,
        })

}


export default config;