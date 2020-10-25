import React from 'react';

export default function Categories({ categories, selected, onClick }) {
  return (
    <>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => onClick(name)}>
              {selected === name ? `${name} (V)` : name}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
