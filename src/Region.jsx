import React from 'react';

export default function Region({ name, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {name}
    </button>
  );
}
