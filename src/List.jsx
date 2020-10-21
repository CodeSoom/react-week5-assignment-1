import React from 'react';

export default function List({ items }) {
  return (
    <ul>
      {
        items.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  );
}
