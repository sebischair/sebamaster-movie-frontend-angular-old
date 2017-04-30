'use strict';


middlewares.$inject = ['$httpProvider','$windowProvider','$qProvider','$stateProvider','API_URL'];
export default function middlewares ($httpProvider,$windowProvider,$qProvider,$stateProvider,API_URL){

    let $window = $windowProvider.$get();
    let $state = $stateProvider.$get();
    let $q = $qProvider.$get();

    //  register the JWT interceptor via an anonymous factory
    $httpProvider.interceptors.push(() => {
        return {
            'request': (config) => {

                //Making a request to the API Server
                if(config.url.indexOf(API_URL) === 0) {

                    let token = $window.localStorage['jwtToken'];

                    if (token) {
                        config.headers.Authorization = 'JWT ' + token;
                    }

                }


                return config;
            },
            'response': function(response) {

                //Receiving response from  the API Server
                if(response && response.config.url.indexOf(API_URL) === 0 ) {

                    // If a token was sent back, save it
                    if(response.data.hasOwnProperty('token')) {
                        $window.localStorage['jwtToken'] = response.data.token;
                    }

                }

                return response;
            }
        };
    });

    //  register the Error interceptor via an anonymous factory
    $httpProvider.interceptors.push(() => {
        return {
            'responseError': function(rejection) {

                // do something on error
                if(rejection.status == 400 || rejection.status == 401) {
                    $state.go('login',{});
                }

                return $q.reject(rejection);
            }

        };
    });


}