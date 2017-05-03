'use strict';

import MoviesComponent from './../components/view-movies/view-movies.component';
import MovieComponent from './../components/view-movie/view-movie.component';
import MovieEditComponent from './../components/view-movie-edit/view-movie-edit.component';
import MovieCreateComponent from './../components/view-movie-create/view-movie-create.component';
import LoginComponent from './../components/view-login/view-login.component';

import MoviesService from './../services/movies/movies.service';


resolveMovie.$inject = ['$stateParams', MoviesService.name];
function resolveMovie($stateParams,moviesService){
    return moviesService.get($stateParams.movieId);
}

resolveMovies.$inject = [MoviesService.name];
function resolveMovies(moviesService){
    return moviesService.list();
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
        .state('movieAdd', {
            url: '/movies/new',
            component: MovieCreateComponent.name
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
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })


}

