import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button" onClick={onClick}>{category.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
