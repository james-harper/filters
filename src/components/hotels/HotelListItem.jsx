import React from 'react';

const HotelListItem = ({ hotel }) => (
  <div style={{
    border: "1px solid black",
    marginBottom: 10,
    padding: 10
   }}>
    <div>Name: {hotel.name}</div>
    <div>Rating: {hotel.starRating}</div>
    <div>
      Facilities:
      {!hotel.facilities.length && (
        <span>&nbsp;This hotel has no facilities</span>
      )}
      <ul>
      {hotel.facilities.map(facility => (
        <li key={facility}>{facility}</li>
      ))}
    </ul>
    </div>
  </div>
);

export default HotelListItem;