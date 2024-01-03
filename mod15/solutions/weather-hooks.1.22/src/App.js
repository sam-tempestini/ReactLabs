import React, {useState} from 'react';
import SearchForm from './SearchForm';
import Weather from './Weather';
function App() {

  const [results, setResults] = useState([])
  const APIKEY = '582fdd74d7715ff4b67615e38a7e35af';

  async function fetchData(e) {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    if(city && country) {
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${APIKEY}`)
      .then( res => res.json())
      .then(data => data);
    
      setResults({
        data: apiData,
        city: apiData.city,
        country: apiData.sys.country,
        description: apiData.weather[0].description,
        temperature: Math.round(apiData.main.temp * 9/5 - 459.67),
        error:''
      })
    }
    else {
      setResults({
        data: '',
        city: '',
        country: '',
        description: '',
        temperature: '',
        error:'Please Type A City And Country'
      })
    }
  }
  return (
    <div className="container">
      <h1>Weather App</h1>
      <SearchForm getWeather={fetchData} />
      <Weather city={results.city}
                country={results.country}
                description={results.description}
                temperature={results.temperature}
                error={results.error}  />
      {console.log(results.data)}
    </div>
  );
}


export default App;
