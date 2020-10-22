import React from 'react';

import Button from './Button';

export default function ButtonList({ labels, onClick, selectedId }) {
  return (
    <ul>
      {
        labels.map(({ id, name }) => (
          <li key={id}>
            <Button onClick={() => onClick(id)} selected={id === selectedId}>
              {name}
            </Button>
          </li>
        ))
      }
    </ul>
  );
}
