'use strict';

import Data from './movies.data';



export default class MoviesServiceDefinition {

    constructor() {

        this.asyncMovies = Data.asyncMovies;
        this.asyncMovie = Data.asyncMovie;

    }

    static get name(){
        return 'moviesService';
    }

     getMovies() {

        return this.asyncMovies().then(data => {

            return new Promise((resolve, reject) => {
                resolve(data);

            });

        });


    }

    getMovie(movieId) {

        return this.asyncMovie(movieId).then(data => {

            return new Promise((resolve, reject) => {
                resolve(data);
            });

        })
    }




}