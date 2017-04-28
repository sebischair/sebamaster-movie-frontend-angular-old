'use strict';


export default class MoviesServiceDefinition {

    static get $inject(){
        return ['$http', 'API_URL'];
    }

    constructor($http,API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/movies/`;

    }

    static get name(){
        return 'moviesService';
    }

     getMovies() {

        let url = this.resourceUrl;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);

            });

        });

    }

    getMovie(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }


    createMovie(movie) {

        let url = this.resourceUrl;
        return this.$http.post(resourceUrl,movie).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }

    deleteMovie(id) {
        let url = `${ this.resourceUrl }${ id }`;

        return this.$http.delete(resourceUrl).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });

        })
    }

    updateMovie(movie) {

        let url = `${ this.resourceUrl }${ movie['_id'] }`;

        return this.$http.get(resourceUrl).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }


}