'use strict';

import angular from 'angular';

import ViewMoviesComponent from './view-movies.component';


export default angular.module('ViewMovies', [])
    .component(ViewMoviesComponent.name, new ViewMoviesComponent);