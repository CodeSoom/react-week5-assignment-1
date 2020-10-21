import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <li>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
