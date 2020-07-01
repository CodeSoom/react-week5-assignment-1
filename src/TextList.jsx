import React from 'react';

export default function TextList({ elements }) {
  return (
    <ul>
      {elements.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
}
