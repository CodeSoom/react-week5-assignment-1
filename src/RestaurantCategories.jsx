import React from 'react';

export default function RestaurantCategories({ categories, onClick }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <input
            type="button"
            onClick={() => onClick(category)}
            value={category.name}
          />
        </li>
      ))}
    </ul>
  );
}
