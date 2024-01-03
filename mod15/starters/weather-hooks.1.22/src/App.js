import React from 'react';
import SearchForm from './SearchForm';
import Weather from './Weather';
function App() {

  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchForm />
      <Weather />
    </div>
  );
}


export default App;
