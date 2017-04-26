
'use strict';

import template from './login-view.template.html';

class LoginViewComponent {
    constructor(){
        this.controller = LoginViewComponentController;
        this.template = template;

    }

    static get name() {
        return 'loginView';
    }


}

class LoginViewComponentController{
    constructor(){

    }

}


export default LoginViewComponent;