import React from 'react';

export default function Restaurants({ restaurants }) {
  if (!restaurants.length) {
    return (
      <p>지역과 카테고리를 클릭해주세요.</p>
    );
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
