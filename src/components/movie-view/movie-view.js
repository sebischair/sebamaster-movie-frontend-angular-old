'use strict';

import angular from 'angular';

import MovieViewComponent from './movie-view.component';


export default angular.module('MovieView', [])
    .component(MovieViewComponent.name, new MovieViewComponent);