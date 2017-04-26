
'use strict';

import template from './movies-view.template.html';

class MoviesViewComponent {
    constructor(){
        this.controller = MoviesViewComponentController;
        this.template = template;

    }

    static get name() {
        return 'moviesView';
    }


}

class MoviesViewComponentController{
    constructor(){

    }

}


export default MoviesViewComponent;