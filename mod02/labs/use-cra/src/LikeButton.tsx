import React, { Component } from 'react'

export default class LikeButton extends Component {
    state = {
        numberOfLikes: 0
    }
    handleClick = ()=>{
        this.setState(
            {
                numberOfLikes: this.state.numberOfLikes + 1
            }
        )
    }
    render() {
        return (
            <button style={{fontWeight: 'bold', backgroundColor: 'white', color: 'red'}}
                    onClick={this.handleClick}>
                {(this.state.numberOfLikes===0 ? 'Like' : `Liked ${this.state.numberOfLikes} times!`)}
            </button>
        )
    }
}
