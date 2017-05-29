'use strict';

import MoviesAPISimulator from './movies.api.simulator';


export default class MoviesLocalService {

    constructor() {

    }

    static get name(){
        return 'moviesService';
    }


    list(){
       return MoviesAPISimulator.getMoviesAsync().then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }


    get(id){
        return MoviesAPISimulator.getMovieByIdAsync(id).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })

    }

    create(movie){
        return MoviesAPISimulator.createMovie(movie).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        });

    }

    delete(id){
        return MoviesAPISimulator.deleteMovie(id).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });

        });

    }

    update(movie){
        return MoviesAPISimulator.updateMovie(movie).then(responce => {
            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        });
    }

}