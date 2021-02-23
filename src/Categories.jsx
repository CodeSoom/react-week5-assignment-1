import React from 'react';

export default function Categories({ categories, onClick }) {
  return (
    <ul>
      {categories.map((categorie) => (
        <li key={categorie.id}>
          <button type="button" onClick={() => onClick(categorie.id)}>
            {categorie.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
