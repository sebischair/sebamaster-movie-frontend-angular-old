'use strict';

import MoviesComponent from '../components/movies-view/movies-view.component';
import MovieComponent from '../components/movie-view/movie-view.component';
import MovieEditComponent from '../components/movie-edit-view/movie-edit-view.component';
import ProfileComponent from './../components/profile-view/profile-view.component';
import RegisterComponent from './../components/register-view/register-view.component';
import LoginComponent from './../components/login-view/login-view.component';

import MovieService from './../services/movies/movies.service';


resolveMovie.$inject = ['$stateParams', MovieService.name];
function resolveMovie($stateParams,moviesService){
    return moviesService.getMovie($stateParams.movieId);
}

resolveMovies.$inject = [MovieService.name];
function resolveMovies(moviesService){
    return moviesService.getMovies();
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/movies");

    $stateProvider
        .state('movies', {
            url: '/movies',
            component: MoviesComponent.name,
            resolve: {
                movies : resolveMovies
            }
        })
        .state('movie', {
            url: '/movies/:movieId',
            component: MovieComponent.name,
            resolve: {
                movie : resolveMovie
            }

        })
        .state('movieEdit', {
            url: '/movies/:movieId/edit',
            component: MovieEditComponent.name,
            resolve: {
                movie : resolveMovie
            }
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

