import { generateHotels } from './../data/mockApi';

import { APPLY_FACILITY_FILTER, REMOVE_FACILITY_FILTER } from '../constants/action-types';

const hotels = generateHotels();

const initialState = {
  hotels,
  visibleHotels: hotels,
  facilityFilters: []
};

/**
 * Compare 2 arrays and determine if their elements overlap
 *
 * @param {string[]} a
 * @param {string[]} b
 * @returns {boolean}
 */
function intersect(a, b) {
  return a.filter(Set.prototype.has, new Set(b)).length >= b.length;
}

/**
 * Root reducer function
 */
export default function (state = initialState, action) {
  const { facilityFilters } = state;

  if (action.type === APPLY_FACILITY_FILTER) {
    const newFilters = facilityFilters.includes(action.payload) ? facilityFilters : [
      ...facilityFilters,
      action.payload,
    ];

    return {
      ...state,
      facilityFilters: newFilters,
      visibleHotels: state.hotels.filter(hotel => intersect(hotel.facilities, newFilters)),
    };
  }

  if (action.type === REMOVE_FACILITY_FILTER) {
    const newFilters = facilityFilters.filter(f => f !== action.payload);
    const newHotels = newFilters.length ? state.hotels.filter(hotel => {
      return intersect(hotel.facilities, newFilters);
    }) : state.hotels;

    return {
      ...state,
      facilityFilters: newFilters,
      visibleHotels: newHotels,
    };
  }

  return state;
}