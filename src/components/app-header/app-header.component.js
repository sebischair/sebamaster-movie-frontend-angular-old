
'use strict';

import template from './app-header.template.html';

class AppHeaderComponent {
    constructor(){
        this.controller = AppHeaderComponentController;
        this.template = template;

    }

    static get name() {
        return 'appHeader';
    }


}

class AppHeaderComponentController{
    constructor(){

    }

}


export default AppHeaderComponent;