import React from 'react';

export default function Restaurants({ restaurants }) {
  if (!restaurants.length) {
    return (
      <p>지역과 카테고리를 클릭해주세요.</p>
    );
  }

  return (
    <ul>
      {restaurants.map((restaurnat) => (
        <li key={restaurnat.id}>{restaurnat.name}</li>
      ))}
    </ul>
  );
}
