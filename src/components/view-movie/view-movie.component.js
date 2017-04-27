
'use strict';

import template from './view-movie.template.html';

class ViewMovieComponent {
    constructor(){
        this.controller = ViewMovieComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewMovie';
    }


}

class ViewMovieComponentController{
    constructor(){

    }

}


export default ViewMovieComponent;