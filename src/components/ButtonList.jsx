import React from 'react';

export default function ButtonList({ listId = 'button-list', items, handleClickButton }) {
  return (
    <ol id={listId}>
      {
        items.map(({ id, name }) => (
          <li key={id}>
            <button type="button" onClick={() => handleClickButton(id)}>
              {name}
            </button>
          </li>
        ))
      }
    </ol>
  );
}
