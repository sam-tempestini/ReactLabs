import React, { Component } from 'react'
import MovieContext from './MovieContext';

export default class Navbar extends Component {
    render() {
        return (
            <MovieContext.Consumer>
                {
                    ({movies}) => {
                        return (
                            <div className="ui inverted segment">
                                <div className="ui inverted secondary menu">
                                    <h3>
                                        <i className="video camera icon"></i>Movie List
                                    </h3>
                                    <span className="right item">
                                        Number of movies: {movies.length}
                                    </span>
                                </div>
                            </div>
                        )
                    }
                }
                
            </MovieContext.Consumer>
        )
    }
}
