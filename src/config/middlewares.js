'use strict';


middlewares.$inject = ['$httpProvider','$window','API_URL'];
export default function middlewares ($httpProvider,AuthenticationService,$window,API_URL){

    // alternatively, register the interceptor via an anonymous factory
    $httpProvider.interceptors.push(() => {
        return {
            'request': (config) => {

                //Making a request to the API Server
                if(config.url.indexOf(API_URL) === 0) {

                    let token = $window.localStorage['jwtToken'];
                    config.headers.Authorization = 'JWT ' + token;

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

}