import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = { searchTerm: ''};
    }
    handleInputChange = (e) => {
        this.setState({searchTerm: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state.searchTerm);
    }
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
