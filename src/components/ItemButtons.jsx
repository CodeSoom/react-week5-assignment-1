import React from 'react';

export default function ItemButtons({ items = [], onClick, selected }) {
  return (
    <ul>
      {items.map(({ id, name }) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onClick({ id, name })}
          >
            <span>
              {name}
              {selected && (selected === id || selected === name) ? '(V)' : ''}
            </span>
          </button>
        </li>
      ))}
    </ul>
  );
}
