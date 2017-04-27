
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

    static get $inject(){
        return ['$state'];
    }

}


export default ViewMovieComponent;