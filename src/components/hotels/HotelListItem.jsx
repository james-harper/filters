import React from 'react';

const renderStars = (num) => {
  const stars = [...Array(5).keys()];
  return stars.map((_, i) => {
    if (i + 1 <= num) {
      return '★';
    }

    return '☆';
  });
}

const HotelListItem = ({ hotel }) => (
  <article className="pv4 bb b--black-10 ph3 ph0-l">
    <div className="flex flex-column flex-row-ns">
      <div className="w-100 w-60-ns pr3-ns order-2 order-1-ns">
        <h1 className="f3 athelas mv0 lh-title">{hotel.name}</h1>
        <p className="f6 lh-copy gray mt0 mb2">{renderStars(hotel.starRating)}</p>
        {!hotel.facilities.length && (
          <h2 className="f6 fw4 mt0 mb0 black-60">This hotel has no facilities</h2>
        )}
        {hotel.facilities.map(facility => (
          <h2 className="f6 fw4 mt0 mb0 black-60" key={facility}>{facility}</h2>
        ))}
      </div>
    </div>
  </article>
);

export default HotelListItem;