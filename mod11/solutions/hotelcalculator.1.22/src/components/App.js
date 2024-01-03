import React, { Component } from 'react';
import HotelCalculator from './hotel-calculator';

export default class App extends Component {
    render() {
        return (
            <div className="container col-md-8">
                <HotelCalculator/>
            </div>
        )
    }
}
