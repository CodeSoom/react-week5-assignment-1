import React from 'react';

export default function Categories({ selected, categories, onClick }) {
  return (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <button type="button" onClick={() => onClick(category.id)}>
              {category.name}
              {selected === category.id && '(V)'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
