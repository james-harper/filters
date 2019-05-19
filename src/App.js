import React from 'react';
import './App.css';
import HotelList from './components/hotels/HotelList';
import FacilityFilters from './components/filters/FacilityFilters';


function App() {
  return (
    <div className="App">
      <h3>Hotels</h3>
      <FacilityFilters />
      <HotelList />
    </div>
  );
}

export default App;
