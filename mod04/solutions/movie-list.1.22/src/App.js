import React from 'react';
import {movieList} from './movies';

function App() {
  //const movieList = ['Snow White and the Seven Dwarfs', 'Beauty and the Beast', 'The Little Mermaid', 'Cinderella', 'Aladdin', 'Sleeping Beauty'];

  return (
    <div className="card-columns">
      {
        movieList.map(movie => 
        <div className="card" 
             key={movie.id}  
             style={{"max-width": "18rem"}}>
          <img className="card-img-top" 
               src={movie.poster} 
               alt={movie.title} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p className="card-text">{movie.description}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">
              Year released: {movie.year}
            </small>
          </div>
        </div>
         
      )}
    </div>
  );
}

export default App;
