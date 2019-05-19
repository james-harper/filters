import React from 'react';
import './App.css';
import HotelList from './components/hotels/HotelList';
import FacilityFilters from './components/filters/FacilityFilters';

function App() {
  return (
    <div className="App">
      <h1>Hotels</h1>
      <FacilityFilters />
      <HotelList />
    </div>
  );
}

export default App;
