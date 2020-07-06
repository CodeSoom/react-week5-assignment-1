import React from 'react';

export default function List({ listId = 'list', items }) {
  return (
    <ol id={listId}>
      {
        items.map((item) => (
          <li key={item.id}>
            {
              Object.keys(item)
                .filter((key) => key !== 'id')
                .map((key) => item[key])
                .join(' | ')
            }
          </li>
        ))
      }
    </ol>
  );
}
