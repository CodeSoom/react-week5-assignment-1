import React from 'react';

export default function Categories({
  categories, categoryId, onClick,
}) {
  const isSelected = (id) => id === categoryId;

  return (
    <ul>
      {
        categories.map((category) => (
          <li key={category.id}>
            <button
              type="button"
              onClick={() => onClick(category.id)}
            >
              { category.name }
              { isSelected(category.id) && '(V)' }
            </button>
          </li>
        ))
      }
    </ul>
  );
}
