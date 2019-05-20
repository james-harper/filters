import { generateHotels } from './mockApi';

it('generates hotel data', () => {
  const hotels = generateHotels();

  expect(hotels[0].name).toEqual('hotel 1');
  const expectedKeys = ['facilities', 'name', 'starRating'];
  expect(Object.keys(hotels[0]).sort()).toEqual(expectedKeys);
})