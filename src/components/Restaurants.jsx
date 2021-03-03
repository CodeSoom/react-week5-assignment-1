import React from 'react';

export default function Restaurants({ restaurants }) {
  if (restaurants.length === 0) {
    return (
      <p>지역과 종류를 누르시면 식당 목록들이 나옵니다.</p>
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
