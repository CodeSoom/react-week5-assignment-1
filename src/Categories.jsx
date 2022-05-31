import React from 'react';

export default function Categories({ categories }) {
  return (
    <>
      <ul>
        {categories.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}
