'use strict';

import angular from 'angular';

import MoviesViewComponent from './movies-view.component';


export default angular.module('MoviesView', [])
    .component(MoviesViewComponent.name, new MoviesViewComponent);