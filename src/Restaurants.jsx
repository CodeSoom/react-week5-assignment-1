import React from 'react';

export default function Restaurants({ restaurants }) {
  if (restaurants.length === 0) {
    return <p>검색된 리스트가 없습니다.</p>;
  }

  return (
    <>
      <div>
        {restaurants.map((restaurant) => (
          <p key={restaurant.id}>{restaurant.name}</p>
        ))}
      </div>
    </>
  );
}
