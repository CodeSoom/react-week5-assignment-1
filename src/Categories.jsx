import React from 'react';

export default function Categories({ categories, onClick, selectId }) {
  return (
    <ul>
      {categories.map((categorie) => (
        <li key={categorie.id}>
          <button type="button" onClick={() => onClick(categorie.id)}>
            {selectId === categorie.id
              ? `${categorie.name}(V)`
              : categorie.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
