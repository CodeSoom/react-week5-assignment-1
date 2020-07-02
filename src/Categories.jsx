import React from 'react';

export default function Categories({ categories }) {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}><button type="button">{category.name}</button></li>
        ))}
      </ul>
    </div>
  );
}
