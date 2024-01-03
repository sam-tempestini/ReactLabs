import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.handleSubmit}>
                    <div className="field">
                        <label>Video Search</label>
                        <input type="search" 
                                className="form-control" 
                                value={this.state.searchTerm}
                                onChange={this.handleInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}
