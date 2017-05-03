
'use strict';

import template from './view-movies.template.html';
import MoviesService from './../../services/movies/movies.service';
import UserService from './../../services/user/user.service';


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
    constructor($state,MoviesService,UserService){
        this.$state = $state;
        this.MoviesService = MoviesService;
        this.UserService = UserService;

    }

    details (movie) {
        let _id = movie['_id'];
        this.$state.go('movie',{ movieId:_id});
    };

    edit (movie) {

        if (this.UserService.isAuthenticated()) {
            let _id = movie['_id'];
            this.$state.go('movieEdit',{ movieId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    newMovie(){

        if (this.UserService.isAuthenticated()) {
            this.$state.go('movieAdd',{});
        } else {
            this.$state.go('login',{});
        }

    }


    delete(movie) {
        if (this.UserService.isAuthenticated()) {
            let _id = movie['_id'];

            this.MoviesService.delete(_id).then(response => {
                let index = this.movies.map(x => x['_id']).indexOf(_id);
                this.movies.splice(index, 1);
            })

        } else {
            this.$state.go('login',{});
        }
    };


    static get $inject(){
        return ['$state', MoviesService.name, UserService.name];
    }

}

export default ViewMoviesComponent;