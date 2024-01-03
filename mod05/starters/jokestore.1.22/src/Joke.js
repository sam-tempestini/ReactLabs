import React from 'react';
//import components from reactstrap

export default class Joke extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
        this.toggle = this.toggle.bind(this);
      }


    toggle() {
        this.setState({
            fadeIn: !this.state.fadeIn
        });
    }

    render() {

        return (
            <div>

            </div>
        );
    }

};