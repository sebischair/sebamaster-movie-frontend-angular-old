
'use strict';

import template from './view-movie.template.html';

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
    constructor($state){
        this.$state = $state;

    }

    edit () {
        let _id = this.movie['_id'];
        this.$state.go('movieEdit',{ movieId:_id});
    };


    delete(movie) {
        //ToDo
    };


    getPosterURL(){

        let posterURL = '';

        if (this.movie.posters.hasOwnProperty('thumbnail')) {
            posterURL = this.movie.posters.thumbnail;
        } else if (this.movie.posters.hasOwnProperty('profile')) {
            posterURL = this.movie.posters.profile;
        } else if (this.movie.posters.hasOwnProperty('detailed')) {
            posterURL = this.movie.posters.detailed;
        } else if (this.movie.posters.hasOwnProperty('original')) {
            posterURL = this.movie.posters.original;
        } else {
            posterURL ='http://placehold.it/32x32';
        }

        return posterURL;
    }

    static get $inject(){
        return ['$state'];
    }

}


export default ViewMovieComponent;