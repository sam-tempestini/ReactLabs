import React from 'react'



export default class HotelCalculator extends React.Component {
    constructor(props){
        super(props);
	// create refs for all input fields
    }
    
    calculateCharges = () => {
        // const rate = parseFloat(/* read value from roomrate field */);
        // const nights = parseInt(/* read value from numnights field */);
        let discount = 0;
        if({/* read checked prop from none field */}) {
            discount = 0;
        }
        else if({/* read checked prop from AAA field */}) {
            discount = .10;
        }
        else {
            discount= .25;
        }
        //const charges = rate * nights * (1-discount);
        // /* assign to value of room charges field */ = charges.toFixed(2);
        //const TAX_RATE = (/* read checked prop from exempt field */) ? 0 : .12;
        //const tax = charges * TAX_RATE;
        ///* assign to value of tax field */ = tax.toFixed(2);
        //const total = charges + tax;
        ///* assign to value of total field */ = total.toFixed(2);
    }
    render(){
    return (
        <div className="bg-light text-dark col-md-12 p-3">
            <div className="row">
                <div className="container text-center bg-primary text-white">
                    <h1>Hotel Calculator</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">                
                    <div className="form-group row col-md-8">
                        <label>Room Rate:</label>
                        <input type="text"
                               id="txtRoomRate"
                               className="form-control" />
                    </div>
                    <div className="form-group row col-md-8">
                        <label>Number of Nights:</label>
                        <input type="number" 
                               id="txtNumNights"
                               className="form-control" />
                    </div>
                    <div className="row col-md-8">
                        <div className="col px-4 py-3">  
                            <fieldset className="form-group" 
                                      style={{border: '1px solid #000'}}>                        
                                <legend className="col-form-label px-3 py-2">
                                    Discounts
                                </legend>        
                                <div className="form-check">
                                    <input className="form-check-input" 
                                           type="radio" 
                                           name="discount" 
                                           id="rdoNone" 
                                           value="none" />
                                    <label className="form-check-label"
                                           htmlFor="rdoNone">
                                        None (0%)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="discount"
                                           id="rdoAAA_AARP"
                                           value="aaa/aarp" />
                                    <label className="form-check-label"
                                           htmlFor="rdoAAA_AARP">
                                        AAA/AARP (10%)
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input"
                                           type="radio"
                                           name="discount"
                                           id="rdoGovt"
                                           value="govt" />
                                    <label className="form-check-label"
                                           htmlFor="rdoGovt">
                                        Gov't (25%)
                                    </label>
                                </div>                    
                            </fieldset>
                        </div>
                        <div className="row col-md-8 text-center mb-4">
                            <div className="form-check">
                                <input className="form-check-input"
                                       type="checkbox"
                                       id="chkTaxExempt" />
                                <label className="form-check-label"
                                       htmlFor="chkTaxExempt">
                                    Tax Exempt
                                </label>
                                
                            </div>                  
                        </div>
                    </div>        
                    <div className="form-group row col-md-8">
                        <div className="col">
                            <button type="button"
                                    className="btn btn-primary btn-block"
                                    onClick={() => this.calculateCharges()}>
                                calculate
                            </button>
                        </div>                    
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="form-group row col-md-8">
                        <label>Room Charges:</label>
                        <input type="text"
                               id="txtRoomCharges"
                               className="form-control" />
                    </div>
                    <div className="form-group row col-md-8">
                        <label>Tax (12%):</label>
                        <input type="text"
                               id="txtTax"
                               className="form-control" />
                    </div>
                    <div className="form-group row col-md-8">
                        <label>Total Due:</label>
                        <input type="text"
                               id="txtTotalDue"
                               className="form-control" />
                    </div>                    
                </div>
            </div>
        </div>
    )
    }
}
