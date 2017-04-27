
'use strict';

import template from './view-movie-edit.template.html';

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
    constructor($state){
        this.model = {};
        this.$state = $state;
    }

    $onInit() {
        //Clone the Movie Data
        this.model = JSON.parse(JSON.stringify(this.movie))
    }

    reset() {
        this.model = JSON.parse(JSON.stringify(this.movie));
    };

    update() {
        let _id = this.movie['_id'];
        this.$state.go('movie',{ movieId:_id});
    };

    static get $inject(){
        return ['$state'];
    }

}


export default ViewMovieEditComponent;