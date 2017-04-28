'use strict';


export default class MoviesServiceDefinition {

    static get $inject(){
        return ['$http'];
    }

    constructor($http) {

        this.$http = $http;



    }

    static get name(){
        return 'moviesService';
    }

     getMovies() {

         let resourceUrl = 'http://3f47ea84.ngrok.io/api/movies';
         return this.$http.get(resourceUrl).then(responce => {


            return new Promise((resolve, reject) => {
                resolve(responce.data);

            });

        });

    }

    getMovie(movieId) {

        let resourceUrl = `http://3f47ea84.ngrok.io/api/movies/${ movieId }`;
        return this.$http.get(resourceUrl).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }




}