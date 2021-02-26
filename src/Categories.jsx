import React from 'react';

export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <button>{category.name}</button>
        </li>
      ))}
    </ul>
  )
}
