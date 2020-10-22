import React from 'react';

export default function Button({ name, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {name}
    </button>
  );
}
