
'use strict';

import template from './movie-view.template.html';

class MovieViewComponent {
    constructor(){
        this.controller = MovieViewComponentController;
        this.template = template;

    }

    static get name() {
        return 'movieView';
    }


}

class MovieViewComponentController{
    constructor(){

    }

}


export default MovieViewComponent;