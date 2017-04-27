
'use strict';

import template from './app-header.template.html';
import './app-header.style.css';

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
    constructor($state){
        this.$state = $state;
    }


    goHome(){
        this.$state.go('movies',{});
    }

    goLogin(){
        this.$state.go('profile',{});
    }

    static get $inject(){
        return ['$state'];
    }

}


export default AppHeaderComponent;