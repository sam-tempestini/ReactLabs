import React from 'react';


class App extends React.Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick.bind(this);
    
  }
  handleClick(e){
    console.log(`${e.target.name} clicked`);
    console.log(`this is ${this}`)
  }
  handleButtonClick = (e) => {
    console.log(`button clicked`);
    console.log(`this is ${this}`);
  }
  render(){
    return (
      <div className="container m-5">
        <div className="col-md-12">
            <button type="button"
                    name="button1"
                    className="btn btn-primary btn-sm mx-3"
                    onClick={this.handleClick}>
                button 1
            </button>
            <button type="button"
                    name="button2"
                    className="btn btn-success btn-sm mx-3"
                    onClick={this.handleClick}>
                button 2
            </button>
            <button type="button"
                    name="button3"
                    className="btn btn-warning btn-sm mx-3"
                    onClick={this.handleClick2}
                    >
                button 3
            </button>
            <button type="button"
                    name="button4"
                    className="btn btn-danger btn-sm mx-3"
                    onClick={this.handleButtonClick}
                    >
                button 4
            </button>
            <button type="button"
                    name="button5"
                    className="btn btn-info btn-sm mx-3"
                    onClick={(e) => {console.log(`${e.target.name} clicked`); console.log(`this is ${this}`)}}
                    >
                button 5
            </button>
        </div>
      </div>
    );

  }
}

export default App;
