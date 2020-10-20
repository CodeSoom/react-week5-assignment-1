import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map((category) => (
        <li><button onClick={onClick} type="button">{category}</button></li>
      ))}
    </ul>
  );
}
