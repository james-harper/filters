import reducer from '.';
import { APPLY_FACILITY_FILTER, REMOVE_FACILITY_FILTER } from '../constants/action-types';

const hotels = [
  {
    "name": "hotel one",
    "starRating": 5,
    "facilities": ["car park", "pool"]
  },
  {
    "name": "hotel two",
    "starRating": 3,
    "facilities": ["car park", "gym"]
  },
  {
    "name": "hotel three",
    "starRating": 3,
    "facilities": []
  }
];

describe('reducer tests', () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      hotels,
      visibleHotels: hotels,
      facilityFilters: [],
    };
  });

  it('applies and removes facility filters correctly', () => {
    let state = reducer(initialState, {
      type: APPLY_FACILITY_FILTER,
      payload: 'car park',
    });

    expect(state.facilityFilters).toEqual(['car park']);
    expect(state.visibleHotels.length).toEqual(2);
    expect(state.visibleHotels.map(hotel => hotel.name)).toEqual(['hotel one', 'hotel two']);

    state = reducer(state, {
      type: APPLY_FACILITY_FILTER,
      payload: 'pool',
    });

    expect(state.facilityFilters).toEqual(['car park', 'pool']);
    expect(state.visibleHotels.length).toEqual(1);
    expect(state.visibleHotels).toEqual([hotels[0]]);

    state = reducer(state, {
      type: REMOVE_FACILITY_FILTER,
      payload: 'car park',
    });

    expect(state.facilityFilters).toEqual(['pool']);
    expect(state.visibleHotels.length).toEqual(1);
    expect(state.visibleHotels).toEqual([hotels[0]]);

    state = reducer(state, {
      type: REMOVE_FACILITY_FILTER,
      payload: 'pool',
    });

    expect(state.facilityFilters).toEqual([]);
    expect(state.visibleHotels.length).toEqual(3);
    expect(state.visibleHotels).toEqual(hotels);
  });

  it('does not apply the same filter twice', () => {
    let state = reducer(initialState, {
      type: APPLY_FACILITY_FILTER,
      payload: 'car park',
    });
    expect(state.facilityFilters).toEqual(['car park']);

    state = reducer(state, {
      type: APPLY_FACILITY_FILTER,
      payload: 'car park',
    });
    expect(state.facilityFilters.length).toEqual(1);
    expect(state.facilityFilters).toEqual(['car park']);
  });
});


