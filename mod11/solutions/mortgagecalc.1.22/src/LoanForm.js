import React, { Component } from 'react'

function validate(amount, rate, years) {
    return {
      amount: amount.length === 0 || isNaN(amount),
      rate: rate.length === 0 || isNaN(rate),
      years: years.length === 0  || isNaN(years)
    };
}
 
export default class LoanForm extends Component {
    state = {
        amount : '',
        rate: '',
        years: '',
        payment:0,
        touched: {
            amount: false,
            rate: false,
            years: false
        }
    }
    handleUserChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleBlur = field => e => {
        this.setState({
          touched: { ...this.state.touched, [field]: true }
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.calculatePayment();        
    }
    calculatePayment = () => {
        const { amount, rate, years } = this.state;
        const mir = rate/ 1200;
        const numPaymemts = years * 12;

        const payment =((amount * mir) / (1 - Math.pow(1 + mir, - numPaymemts))).toFixed(2);
        this.setState({
            payment
        })
    }

    render() {
        const { amount, rate, years } = this.state;
        const errors = validate(amount, rate, years);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        const shouldMarkError = field => {            
            const hasError = errors[field];
            const shouldShow = this.state.touched[field];
            return hasError ? shouldShow : false;
          };
        return (
            <div className="container jumbotron col-md-6">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label>Loan Amount</label>
                        <input type="text"
                               className={`form-control ${shouldMarkError('amount') ? 'error' : ''}`}
                               name="amount"
                               value={this.state.amount}
                               onChange={this.handleUserChange}
                               onBlur={this.handleBlur("amount")}
                               placeholder="Enter loan amount" />
                    </div>
                    <div className="form-group row">
                        <label>Annual Rate</label>
                        <input type="text"
                               className={`form-control ${shouldMarkError('rate') ? 'error' : ''}`}
                               name="rate"
                               value={this.state.rate}
                               onChange={this.handleUserChange}
                               onBlur={this.handleBlur("rate")}
                               placeholder="Enter annual rate (as a %)" />
                    </div>
                    <div className="form-group row">
                        <label>Loan Length</label>
                        <input type="text"
                               className={`form-control ${shouldMarkError('years') ? 'error' : ''}`}
                               name="years"
                               value={this.state.years}
                               onChange={this.handleUserChange}
                               onBlur={this.handleBlur("years")}
                               placeholder="Enter loan length (in years)" />
                    </div>
                    <div className="form-group row">
                        <button type="submit"
                                className="btn btn-primary btn-block"
                                disabled={isDisabled}
                                >                                
                            calculate
                        </button>
                    </div>
                    <div className="form-group row">
                        <label>Payment</label>
                        <input type="text"
                               className="form-control"
                               name="payment"
                               readOnly={true}
                               value={this.state.payment} />
                    </div>

                </form>
            </div>
        )
    }
}
