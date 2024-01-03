import React, { Component } from 'react'
import Movie from './Movie';
import MovieContext from './MovieContext';

export default class MovieList extends Component {
    render() {        
        return (
            <MovieContext.Consumer>
                {
                    (contextData) => {
                        
                        const movies = contextData.movies;
                        return (
                            <div className="ui link cards">
                            {
                                movies.map(movie => (                    
                                    <Movie key={movie.id} movie={movie} />                    
                                )
                                )              
                                
                            }
                            </div>
                        )
                    }
                }
            </MovieContext.Consumer>
            
        )
    }
}
