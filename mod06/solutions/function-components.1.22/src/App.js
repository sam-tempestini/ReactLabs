import React from 'react';
import Poster from './components/Poster';

function App() {

  const posterInfo = {
    image: `${process.env.PUBLIC_URL}/images/eiffel-tower.jpg`,
    title: "Eiffel Tower",
    caption: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
  };



  return (
    <div>
      <Poster posterInfo={posterInfo}/>
    </div>
  );
}

export default App;
