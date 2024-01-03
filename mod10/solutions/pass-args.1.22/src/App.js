import React from 'react';


class App extends React.Component {
  state = {
    users : [
      {
          id: 1,
          name:'Alexis'
      },
      {
          id: 2,
          name:'Emma'
      },
      {
          id: 3,
          name:'Devan'
      },
      {
          id: 4,
          name:'Dakota'
      },
      {
          id: 5,
          name:'Everett'
      }
    ]
  };
  
  deleteUser(id, e) {
    console.log(e);
    console.log(e.target.name);
    console.log(id);
    
    const { users } = this.state;
    const filteredUsers = users.filter((user) => user.id !== id)
    this.setState({
      users: filteredUsers
    })
  }

  render() {
    const {users} = this.state;;

    return (
      <div className="container m-3">
        <div className="list-group text-center">
        {users.map(user => (
            <button key={user.id}
                    type="button"
                    name={`btn${user.name}`}
                    className="list-group-item list-group-item-info list-group-item-action m-2"
                    onClick={(e) => this.deleteUser(user.id, e)}>
                {user.name}
                <span style={{float:'right'}}>
                  &times;
                </span>
            </button>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
