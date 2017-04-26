'use strict';

import angular from 'angular';

import MovieEditViewComponent from './movie-edit-view.component';


export default angular.module('MovieEditView', [])
    .component(MovieEditViewComponent.name, new MovieEditViewComponent);