
'use strict';

import template from './movie-edit-view.template.html';

class MovieEditViewComponent {
    constructor(){
        this.controller = MovieEditViewComponentController;
        this.template = template;

    }

    static get name() {
        return 'movieEditView';
    }


}

class MovieEditViewComponentController{
    constructor(){

    }

}


export default MovieEditViewComponent;