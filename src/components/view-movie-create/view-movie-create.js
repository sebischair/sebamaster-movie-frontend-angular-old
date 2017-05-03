'use strict';

import angular from 'angular';

import ViewMovieCreateComponent from './view-movie-create.component';


export default angular.module('ViewMovieCreate', [])
    .component(ViewMovieCreateComponent.name, new ViewMovieCreateComponent);