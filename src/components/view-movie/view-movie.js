'use strict';

import angular from 'angular';

import ViewMovieComponent from './view-movie.component';


export default angular.module('ViewMovie', [])
    .component(ViewMovieComponent.name, new ViewMovieComponent);