
'use strict';

import template from './movies-view.template.html';

class MoviesViewComponent {
    constructor(){
        this.controller = MoviesViewComponentController;
        this.template = template;
        this.bindings = {
            movies: '<',
        }

    }

    static get name() {
        return 'moviesView';
    }


}

class MoviesViewComponentController{
    constructor($state){
        this.$state = $state;

    }

    details (movie) {
        let _id = movie['_id'];
        this.$state.go('movie',{ movieId:_id});
    };

    edit (movie) {
        let _id = movie['_id'];
        this.$state.go('movieEdit',{ movieId:_id});
    };


    delete(movie) {
        //ToDo
    };


    static get $inject(){
        return ['$state'];
    }

}

export default MoviesViewComponent;