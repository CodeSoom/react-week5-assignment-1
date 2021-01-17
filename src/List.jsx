import React from 'react';

export default function List({ items }) {
  return (
    <ul>
      {
        items.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))
      }
    </ul>
  );
}
