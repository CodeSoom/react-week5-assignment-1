import React from 'react';

export default function RestaurantRegions() {
  const restaurantRegions = [
    { id: 1, name: '서울' },
    { id: 2, name: '대전' },
  ];

  return (
    <div>
      { restaurantRegions.map(({ id, name }) => (
        <button
          key={id + name}
          type="button"
        >
          {name}
        </button>
      ))}
    </div>
  );
}
