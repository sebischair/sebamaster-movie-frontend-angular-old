'use strict';

export default class AuthenticationService {

    constructor($window){

        this.$window = $window;

    }

    static get name(){
        return 'AuthenticationService';
    }


    saveToken(token) {
        this.$window.localStorage['jwtToken'] = t;
    }

    getToken() {
        return this.$window.localStorage['jwtToken'];
    }

    deleteToken() {
        this.$window.localStorage.removeItem('jwtToken');
    }

    parseJwt(token) {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(this.$window.atob(base64));
    }

    isAuthenticated() {
        let token = this.getToken();
        return !!token;
    }



    static get $inject(){
        return ['$window'];
    }

}
