import React from 'react';
import { connect } from 'react-redux'
import HotelListItem from './HotelListItem';

const mapStateToProps = state => {
  return { hotels: state.hotels };
};

const HotelList = ({ hotels }) => (
  <>
    {!hotels.length && (
      <p>There are no hotels to show</p>
    )}
    {hotels.map(hotel => <HotelListItem key={hotel.name} hotel={hotel} />)}
  </>
);

export default connect(mapStateToProps)(HotelList);