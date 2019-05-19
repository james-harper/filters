import hotels from '../data/hotels.json';
import { APPLY_FACILITY_FILTER, REMOVE_FACILITY_FILTER } from '../constants/action-types';

const initialState = {
  hotels,
  facilityFilters: []
};

function intersect(a, b) {
  return a.filter(Set.prototype.has, new Set(b)).length >= b.length;
}

export default function (state = initialState, action) {
  const { facilityFilters } = state;
  if (action.type === APPLY_FACILITY_FILTER) {
    const newFilters = facilityFilters.includes(action.payload) ? facilityFilters : [
      ...facilityFilters,
      action.payload,
    ];

    return {
      facilityFilters: newFilters,
      hotels: hotels.filter(hotel => intersect(hotel.facilities, newFilters)),
    };
  }

  if (action.type === REMOVE_FACILITY_FILTER) {
    const newFilters = facilityFilters.filter(f => f !== action.payload);
    const newHotels = newFilters.length ? hotels.filter(hotel => {
      return intersect(hotel.facilities, newFilters);
    }) : hotels;

    return {
      facilityFilters: newFilters,
      hotels: newHotels,
    };
  }

  return state;
}