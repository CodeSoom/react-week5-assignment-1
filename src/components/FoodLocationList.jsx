import React from 'react';

export default function FoodLocationList({ items, onClick }) {
  return (
    <li>
      {
        items.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={onClick}
          >
            {item.name}
          </button>
        ))
      }
    </li>
  );
}
