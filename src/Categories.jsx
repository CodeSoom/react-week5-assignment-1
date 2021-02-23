import React from 'react';

export default function Categories({ categories }) {
  return (
    <ul>
      {categories.map((categorie) => (
        <li key={categorie.id}>
          {categorie.name}
        </li>
      ))}
    </ul>
  );
}
