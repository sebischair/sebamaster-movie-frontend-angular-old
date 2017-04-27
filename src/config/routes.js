'use strict';

import MoviesComponent from '../components/view-movies/view-movies.component';
import MovieComponent from '../components/view-movie/view-movie.component';
import MovieEditComponent from '../components/view-movie-edit/view-movie-edit.component';
import ProfileComponent from './../components/view-profile/view-profile.component';
import RegisterComponent from './../components/view-register/view-register.component';
import LoginComponent from './../components/view-login/view-login.component';

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

