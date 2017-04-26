
'use strict';

import template from './profile-view.template.html';

class ProfileViewComponent {
    constructor(){
        this.controller = ProfileViewComponentController;
        this.template = template;

    }

    static get name() {
        return 'profileView';
    }


}

class ProfileViewComponentController{
    constructor(){

    }

}


export default ProfileViewComponent;