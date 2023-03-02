import { useEffect, useState } from 'react';
import './App.css';
import CountriesList from './Pages/CountriesList';
import Navbar from './components/Navbar';
import countries from './countries.json';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import CountryDetails from './Pages/CountryDetails';
import axios from 'axios';

function App() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    const searchCountries = async () => {
      try {
        const response = await axios.get(
          'https://ih-countries-api.herokuapp.com/countries'
        );
        setAllCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    searchCountries();
  });

  return (
    <div className="App">
      <Navbar />

      {allCountries === null ? (
        <h5>Getting Data</h5>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
          }}
        >
          <CountriesList allCountries={allCountries} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/details/:countryCode"
              element={<CountryDetails allCountries={allCountries} />}
            />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
