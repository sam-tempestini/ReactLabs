import React from 'react';
import TodoList from './components/TodoList';
import uuid from 'uuid';
import TodoInput from './components/TodoInput';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items: [ {id:1, title: 'Learn React'},
               {id:2, title: 'Use functional components'},
               {id:3, title: 'Use state'}],
      item: '',
      id: uuid(),
      editItem: false
    };
  }
  
  clearList = ()=>{
    this.setState({
      items:[]
    })
  }

  handleChange = (e)=>{
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e)=>{
    e.preventDefault();
    const newItem = {id: this.state.id, title: this.state.item};
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }
  
  handleDelete = (id)=>{
    const updatedItems = this.state.items.filter(item=>item.id!==id);
    this.setState({
      items: updatedItems
    });
  };

  handleEdit = (id)=>{
    const updatedItems = this.state.items.filter(item=>item.id!==id);
    const selectedItem = this.state.items.find(item=>item.id===id);
    
    this.setState({
      items: updatedItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  }

  render(){
    
    return (
            
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
              <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
            </div>            
          </div>
        </div>      
    );
  }
}


