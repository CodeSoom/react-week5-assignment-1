import React from 'react';

export default function Button({ children, onClick, checked }) {
  return (
    <li>
      <button type="button" onClick={onClick}>
        {children}
        {checked && '(V)'}
      </button>
    </li>
  );
}
