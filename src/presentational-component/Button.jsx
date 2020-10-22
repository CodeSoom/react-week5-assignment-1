import React from 'react';

export default function Button({ children, onClick, selected }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
      {selected && '(V)'}
    </button>
  );
}
