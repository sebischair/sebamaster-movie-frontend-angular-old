
'use strict';

import template from './view-register.template.html';

class ViewRegisterComponent {
    constructor(){
        this.controller = ViewRegisterComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewRegister';
    }


}

class ViewRegisterComponentController{
    constructor(){

    }

}


export default ViewRegisterComponent;