import React from 'react';

export default function RestaurantCategories({ categories, onClickCategory }) {
  return (
    <ul>
      {categories.map(({ id, name }) => (
        <li key={id} onClick={() => onClickCategory(id)}>
          {name}
        </li>
      ))}
    </ul>
  );
}
