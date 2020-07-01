import React from 'react';

export default function Buttons({ values, onClick }) {
  return (
    <ul>
      {values.map((value) => (
        <li key={value.id}>
          <button type="button" onClick={onClick}>{value.name}</button>
        </li>
      ))}
    </ul>
  );
}
