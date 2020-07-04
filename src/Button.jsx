import React from 'react';

export default function Button({ value: { id, name }, onClick }) {
  return (
    <li>
      <button type="button" onClick={() => onClick(id)}>
        {name}
      </button>
    </li>
  );
}
