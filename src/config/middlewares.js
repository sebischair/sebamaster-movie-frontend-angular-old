'use strict';

middlewares.$inject = ['$httpProvider','API_URL'];
export default function middlewares ($httpProvider,API_URL){

    // alternatively, register the interceptor via an anonymous factory
    $httpProvider.interceptors.push(() => {
        return {
            'request': (config) => {

                //Making a request to the API Server
                if(config.url.indexOf(API_URL) === 0 ) {
                    console.log('request',config)
                }


                return config;
            },
            'response': function(response) {


                //Receiving response from  the API Server
                if(response.config.url.indexOf(API_URL) === 0 ) {
                    console.log('response',response.config)

                }

                return response;
            }
        };
    });

}