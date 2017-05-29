'use strict';

import angular from 'angular';

//import MoviesService from './movies.service';
import MoviesService from './movies.local.service';


export default angular.module('MoviesServiceDefinition', [])
    .service(MoviesService.name, MoviesService)