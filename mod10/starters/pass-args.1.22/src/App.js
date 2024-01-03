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
  
  render(){
    const {users} = this.state;

    return (
      <div className="container m-3">
        <div className="list-group text-center">
        {users.map(user => (

            <button key={user.id}
                    type="button"
                    name={`btn${user.name}`}
                    className="list-group-item list-group-item-info list-group-item-action m-2">
                {user.name}
                <span style={{float:'right'}}>&times;</span>
            </button>

        ))}
        </div>
      </div>
    );
  }
}

export default App;
