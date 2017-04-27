
'use strict';

import template from './view-movies.template.html';

class ViewMoviesComponent {
    constructor(){
        this.controller = ViewMoviesComponentController;
        this.template = template;
        this.bindings = {
            movies: '<',
        }

    }

    static get name() {
        return 'viewMovies';
    }


}

class ViewMoviesComponentController{
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

export default ViewMoviesComponent;