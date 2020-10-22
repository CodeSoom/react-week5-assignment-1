import React from 'react';

import Button from './Button';

export default function ButtonList({ labels, onClick, selectedId }) {
  return (
    <ul>
      {
        labels.map(({ id, name }) => (
          <li>
            <Button key={id} onClick={() => onClick(id)} selected={id === selectedId}>
              {name}
            </Button>
          </li>
        ))
      }
    </ul>
  );
}
