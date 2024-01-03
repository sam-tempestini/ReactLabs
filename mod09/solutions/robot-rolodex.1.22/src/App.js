import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';

import './App.css';

class App extends React.Component {
  state = {
    robots: [],
    searchTerm: ''  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((users)=>this.setState({robots: users}));
  }
  
  handleChange = (e)=>{
    this.setState({searchTerm: e.target.value});
  };

  render(){

    const {robots, searchTerm} = this.state;
    
    const filteredRobots = robots.filter(robot=>
      robot.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    return (
      <div className="App">
        <h1 className="maintitle">Robot Rolodex</h1>
        
        <SearchBox placeholder="search users" handleChange={this.handleChange} />
         {
          (robots.length === 0 || Object.keys(robots).length === 0) ? <p className="noresults">No records returned</p> : <CardList robots={filteredRobots} /> 
         }
      
      </div>
    )
};
}

export default App;
