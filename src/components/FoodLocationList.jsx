import React from 'react';

export default function FoodLocationList({ items }) {
  return (
    <li>
      {
        items.map((item) => (
          <button
            type="button"
            key={item.id}
          >
            {item.name}
          </button>
        ))
      }
    </li>
  );
}
