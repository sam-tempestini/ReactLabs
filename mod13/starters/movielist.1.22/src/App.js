import React from 'react';
import Movie from './Movie';
import { uuid } from 'uuidv4';

class App extends React.Component {
  state = {
      movies: [
        {
            id: uuid(),
            name: 'Star Wars: Episode IV - A New Hope',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg',
            year: 1977,
            description: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.'
        },
        {
            id: uuid(),
            name: 'Star Wars: Episode V - The Empire Strikes Back',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/41wkdAStm7L._AC_.jpg',
            year: 1980,
            description: 'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.'
        },
        {
            id: uuid(),
            name: 'Star Wars: Episode VI - Return of the Jedi',
            poster: 'https://images-na.ssl-images-amazon.com/images/I/512x-5tuQLL._AC_.jpg',
            year: 1983,
            description: 'After a daring mission to rescue Han Solo from Jabba the Hutt, the Rebels dispatch to Endor to destroy the second Death Star. Meanwhile, Luke struggles to help Darth Vader back from the dark side without falling into the Emperor\'s trap.'
        }
    ]    
  }



  render() {
    return (
      <div className="ui link cards">
        {
          this.state.movies.map( movie => <Movie key={movie.id} movie={movie} />)
        }
      </div>
    );
  }
};

export default App;
