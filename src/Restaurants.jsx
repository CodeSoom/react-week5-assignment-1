import React from 'react';

import Restaurant from './Restaurant';

const isEmpty = (arr) => arr.length === 0;

export default function Restaurants({ restaurants }) {
  if (isEmpty(restaurants)) {
    return (
      <p>
        레스토랑 목록이 없습니다.
      </p>
    );
  }

  return (
    <ul>
      { restaurants.map((item, index) => (
        <Restaurant
          key={index.toString()}
          name={item}
        />
      ))}
    </ul>
  );
}
