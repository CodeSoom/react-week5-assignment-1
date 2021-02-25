import React from 'react';

export default function Items({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <input type="button" value={item} />
        </li>
      ))}
    </ul>
  );
}
