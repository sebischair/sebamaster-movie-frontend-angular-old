'use strict';

import angular from 'angular';

import ViewMovieEditComponent from './view-movie-edit.component';


export default angular.module('ViewMovieEdit', [])
    .component(ViewMovieEditComponent.name, new ViewMovieEditComponent);