import React from "react";
import "./App.css";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: 5,
      price: 20
    }
  }
  
  render(){
    
    const {quantity, price} = this.state;
    return (
      <div className="app">
        <h1>Checkout</h1>
        <table>
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Unit price</th>
              <th>Total</th>
              <th>{" "}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{quantity}</td>
              <td>${price}</td>
              <td>${price * quantity}</td>
              <td>
                <button>
                  Edit quantity
                </button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    );
  }
}
