
'use strict';

import template from './register-view.template.html';

class RegisterViewComponent {
    constructor(){
        this.controller = RegisterViewComponentController;
        this.template = template;

    }

    static get name() {
        return 'registerView';
    }


}

class RegisterViewComponentController{
    constructor(){

    }

}


export default RegisterViewComponent;