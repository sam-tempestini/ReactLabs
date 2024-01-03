import React, { Component } from 'react'
import MovieContext from './MovieContext';

export default class AddMovie extends Component {
    state = {
        name: '',
        year: '',
        poster: '',
        description: ''
    }    
    handleChange = (e) => {
        this.setState(
            {
                [e.target.name] : e.target.value
            }
        )
    }
    clearForm = () => {
        this.setState(
            {
                name: '',
                year: '',
                poster: '',
                description: ''
            }
        )
    }
    render() {
        return (
            <MovieContext.Consumer>
                {
                    ({addMovie}) => {
                        return (
                            <form className="ui form" >
                                <div className="ui text container">
                                <div className="ui inverted segment">
                                    <h4 className="ui blue inverted header">Add Movie</h4>
                                </div>
                                <div className="six wide field">
                                    <label>Movie Name</label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Movie Name"
                                        value={this.state.name}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="six wide field">
                                    <label>Year</label>
                                    <input type="text"
                                        name="year"
                                        placeholder="Year released"
                                        value={this.state.year}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="six wide field">
                                    <label>Poster URL</label>
                                    <input type="text"
                                        name="poster"
                                        placeholder="Image URL"
                                        value={this.state.poster}
                                        onChange={this.handleChange} />
                                </div>
                                <div className="six wide field">
                                    <label>Description</label>
                                    <textarea rows="2"
                                            name="description"
                                            value={this.state.description}
                                            onChange={this.handleChange}>
                                    </textarea>
                                </div>
                                <button className="ui button" type="button" onClick={() => {addMovie(this.state); this.clearForm()}}>Add Movie</button>
                                </div>
                            </form>
                        )
                    }
                }                
            </MovieContext.Consumer>
        )
    }
}
