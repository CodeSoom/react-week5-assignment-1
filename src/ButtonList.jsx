import React from 'react';

import Button from './ButtonItem';

export default function ButtonList({ labels, onClick, selectedId }) {
  return (
    <ul>
      {
        labels.map(({ id, name }) => (
          <Button key={id} onClick={() => onClick(id)} selected={id === selectedId}>
            {name}
          </Button>
        ))
      }
    </ul>
  );
}
