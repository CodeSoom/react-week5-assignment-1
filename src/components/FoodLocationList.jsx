import React from 'react';

export default function FoodLocationList({ items, onClick }) {
  return (
    <li>
      {
        items.map(({ id, name }) => (
          <button
            type="button"
            key={id}
            onClick={onClick}
          >
            {name}
          </button>
        ))
      }
    </li>
  );
}
