import React from 'react';

export default function List({ listId = 'list', items }) {
  return (
    <ul id={listId}>
      {
        items.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))
      }
    </ul>
  );
}
