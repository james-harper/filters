import data from './facilities.json';
const { facilities } = data;

/**
 * Generate a random number within the given range
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const randomNumber = (min, max) => Math.floor(Math.random() * (min + max) + min);

/**
 * Create an array of empty elements of the given size
 * @param {number} size
 * @returns {undefined[]}
 */
const arrayOf = (size) => [...Array(size).keys()];

/**
 * Generate an array of randomly chosen facilities
 * @returns {string[]}
 */
const getRandomFacilities = () => {
  const numberOfFacilities = randomNumber(0, facilities.length + 1);

  if (numberOfFacilities === facilities.length) {
    return facilities;
  }

  return [...new Set(arrayOf(numberOfFacilities).map(_ => facilities[randomNumber(0, facilities.length)]))];
}

/**
 * @typedef {Object} Hotel
 * @property {string} name
 * @property {number} starRating - rating out of 5
 * @property {string[]} facilities
 */

/**
 * Generate random hotel data
 * @returns {Hotel[]}
 */
export const generateHotels = () => {
  return arrayOf(randomNumber(3, 25)).map((_, index) => ({
    name: `hotel ${index + 1}`,
    starRating: randomNumber(1, 5),
    facilities: getRandomFacilities(),
  }));
}