'use strict';

import angular from 'angular';

import AppFooterComponent from './app-footer.component';


export default angular.module('AppFooter', [])
    .component(AppFooterComponent.name, new AppFooterComponent);