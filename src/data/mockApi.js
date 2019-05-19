import data from './facilities.json';
const { facilities } = data;

const randomNumber = (min, max) => Math.floor(Math.random() * (min + max) + min);

const arrayOf = (size) => [...Array(size).keys()];

const getRandomFacilities = () => {
  const numberOfFacilities = randomNumber(0, facilities.length);

  if (numberOfFacilities === facilities.length) {
    return facilities;
  }

  return [...new Set(arrayOf(numberOfFacilities).map(_ => facilities[randomNumber(0, facilities.length)]))];
}

export const generateHotels = () => {
  return arrayOf(randomNumber(3, 25)).map((_, index) => ({
    name: `hotel ${index + 1}`,
    starRating: randomNumber(1, 5),
    facilities: getRandomFacilities(),
  }));
}

export default () => new Promise(resolve => {
  const hotels = generateHotels();
  setTimeout(() => resolve(hotels), randomNumber(300, 1250));
});