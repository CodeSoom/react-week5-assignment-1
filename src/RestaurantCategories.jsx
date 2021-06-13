import React from 'react';

export default function RestaurantCategories({ categories, onClickCategory }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClickCategory(id)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}
