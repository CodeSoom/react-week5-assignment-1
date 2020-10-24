import React from 'react';

export default function Button({ name, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {name}
      {selected ? '(V)' : null}
    </button>
  );
}
