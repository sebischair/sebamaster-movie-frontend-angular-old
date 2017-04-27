
'use strict';

import template from './view-profile.template.html';

class ViewProfileComponent {
    constructor(){
        this.controller = ViewProfileComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewProfile';
    }


}

class ViewProfileComponentController{
    constructor(){

    }

}


export default ViewProfileComponent;