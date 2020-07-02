import React from 'react';

export default function RestaurantCategories(
  { categories, onClick },
) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <input
            type="button"
            onClick={onClick}
            value={name}
          />
        </li>
      ))}
    </ul>
  );
}
