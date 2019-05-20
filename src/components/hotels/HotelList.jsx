import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HotelListItem from './HotelListItem';

const mapStateToProps = state => {
  return { hotels: state.visibleHotels };
};

const HotelList = ({ hotels }) => (
  <>
    {!hotels.length && (
      <p>There are no hotels to show</p>
    )}
    {hotels.map(hotel => <HotelListItem key={hotel.name} hotel={hotel} />)}
  </>
);

HotelList.defaultProps = {
  hotels: []
};

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    starRating: PropTypes.number,
    facilities: PropTypes.arrayOf(PropTypes.string),
  })),
};

export default connect(mapStateToProps)(HotelList);