'use strict';

import angular from 'angular';

import MoviesService from './movies.service';


export default angular.module('MoviesServiceDefinition', [])
    .service(MoviesService.name, MoviesService)