
'use strict';

import template from './view-movie-edit.template.html';

import MoviesService from './../../services/movies/movies.service';

class ViewMovieEditComponent {
    constructor(){
        this.controller = ViewMovieEditComponentController;
        this.template = template;
        this.bindings = {
            movie: '<',
        }
    }

    static get name() {
        return 'viewMovieEdit';
    }
}

class ViewMovieEditComponentController{
    constructor($state, MoviesService){
        this.model = {};
        this.$state = $state;
        this.MoviesService = MoviesService;
    }

    $onInit() {
        //Clone the Movie Data
        this.model = JSON.parse(JSON.stringify(this.movie))
    }

    cancel() {
        this.model = JSON.parse(JSON.stringify(this.movie));
        this.$state.go('movies',{});
    };

    save() {
        let _id = this.movie['_id'];

        this.MoviesService.update(this.model).then(data => {
            this.movie = JSON.parse(JSON.stringify(data));

            this.$state.go('movie',{ movieId:_id});
        });

    };

    delete() {
        let _id = this.movie['_id'];

        this.MoviesService.delete(_id).then(response => {
            this.$state.go('movies',{});
        });
    };

    static get $inject(){
        return ['$state', MoviesService.name];
    }

}


export default ViewMovieEditComponent;