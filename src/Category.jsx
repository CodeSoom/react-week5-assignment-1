import React from 'react';

export default function Category({ name, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {name}
    </button>
  );
}
