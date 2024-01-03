import React from "react";
import InputModal from "./InputModal.js";
import "./App.css";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isModalOpen : false, 
      quantity: 5,
      price: 20
    }
  }
  openModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }
  onClose = () => this.setState({
    isModalOpen: false
  });
  
  onSubmit = newQuantity => {
    this.setState({
      quantity: newQuantity
    })
  }
  
  render(){
    
    const {quantity, price, isModalOpen} = this.state;
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
                <button onClick={this.openModal}>
                  Edit quantity
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {
          isModalOpen && <InputModal initialValue={quantity}
                                     onSubmit={this.onSubmit}
                                     onClose={this.onClose} />
        }
      </div>
    );
  }
}
