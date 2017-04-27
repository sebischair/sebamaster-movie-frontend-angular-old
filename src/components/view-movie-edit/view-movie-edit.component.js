
'use strict';

import template from './view-movie-edit.template.html';

class ViewMovieEditComponent {
    constructor(){
        this.controller = ViewMovieEditComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewMovieEdit';
    }


}

class ViewMovieEditComponentController{
    constructor(){

    }

}


export default ViewMovieEditComponent;