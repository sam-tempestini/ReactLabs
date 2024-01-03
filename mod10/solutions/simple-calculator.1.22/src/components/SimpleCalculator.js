import React from 'react';
import Results from './Results';
import Keypad from './Keypad';
import '../App.css';


class SimpleCalculator extends React.Component {
    state = {
        result: ""
    }

    
    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    calculate = () => {
        let checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    handleClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };

    render() {
        return (
        
            <div className="calculator-body">
                <h1>Simple calculator</h1>
                <Results result={this.state.result} />
                <Keypad handleClick={this.handleClick} />
            </div>
        
        );
    }
}

export default SimpleCalculator;
