import React from "react";
import Joke from "./Joke";
import {jokes} from './jokes'
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     joke : this.randomJoke()
    };
  }
  randomJoke() {
    const randomNumber = Math.floor(Math.random() * jokes.length);
    return jokes[randomNumber];
    
  }
  shuffleJokes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const joke = this.randomJoke();
    this.setState({
      joke
    });
    this.shuffleJokes(jokes)
  };

  randomColor() {
    const color = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)})`;
    return color;
  }
  
  render() {
    return (
      <div>
        <Joke
          displayColor={this.randomColor}
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;