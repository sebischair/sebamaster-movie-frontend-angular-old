
'use strict';

import template from './app-view.template.html';

class AppViewComponent {
    constructor(){
        this.controller = AppViewComponentController;
        this.template = template;

    }

    static get name() {
        return 'appView';
    }


}

class AppViewComponentController{
    constructor(){

    }

}


export default AppViewComponent;