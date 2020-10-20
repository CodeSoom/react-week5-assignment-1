import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map(({ id, category }) => (
        <li key={id}><button onClick={onClick} type="button">{category}</button></li>
      ))}
    </ul>
  );
}
