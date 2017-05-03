
'use strict';

import template from './view-movie.template.html';
import MoviesService from './../../services/movies/movies.service';
import UserService from './../../services/user/user.service';

class ViewMovieComponent {
    constructor(){
        this.controller = ViewMovieComponentController;
        this.template = template;
        this.bindings = {
            movie: '<',
        }

    }

    static get name() {
        return 'viewMovie';
    }


}

class ViewMovieComponentController{
    constructor($state,MoviesService,UserService){
        this.$state = $state;
        this.MoviesService = MoviesService;
        this.UserService = UserService;

    }

    edit () {

        if (this.UserService.isAuthenticated()) {
            let _id = this.movie['_id'];
            this.$state.go('movieEdit',{ movieId:_id});
        } else {
            this.$state.go('login',{});
        }

    };


    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.movie['_id'];

            this.MoviesService.delete(_id).then(response => {
                this.$state.go('movies',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };


    getPosterURL(){
        let posterURL = 'http://placehold.it/32x32';
        if (this.movie.hasOwnProperty('posters')) {
            if (this.movie.posters.hasOwnProperty('thumbnail')) {
                posterURL = this.movie.posters.thumbnail;
            } else if (this.movie.posters.hasOwnProperty('profile')) {
                posterURL = this.movie.posters.profile;
            } else if (this.movie.posters.hasOwnProperty('detailed')) {
                posterURL = this.movie.posters.detailed;
            } else {
                posterURL = this.movie.posters.original;
            }
        }
        return posterURL;
    }

    static get $inject(){
        return ['$state', MoviesService.name, UserService.name];
    }

}


export default ViewMovieComponent;