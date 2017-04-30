
'use strict';

import template from './view-movies.template.html';
import MoviesService from './../../services/movies/movies.service';


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
    constructor($state,MoviesService){
        this.$state = $state;
        this.MoviesService = MoviesService;

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
        let _id = movie['_id'];

        this.MoviesService.delete(_id).then(response => {
            this.$state.go('movies',{});
        });
    };


    static get $inject(){
        return ['$state', MoviesService.name];
    }

}

export default ViewMoviesComponent;