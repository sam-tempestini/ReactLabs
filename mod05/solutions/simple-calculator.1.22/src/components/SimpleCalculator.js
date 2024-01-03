import React from 'react';
import Results from './Results';
import Keypad from './Keypad';
import '../App.css';


class SimpleCalculator extends React.Component {

    render() {
        return (
        
            <div className="calculator-body">
                <h1>Simple calculator</h1>
                <Results />
                <Keypad />
            </div>
        
        );
    }
}

export default SimpleCalculator;
