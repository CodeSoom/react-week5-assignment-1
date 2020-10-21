import React from 'react';

import Button from './ButtonItem';

export default function ButtonList({ labels, onClick, checkedValue }) {
  return (
    <ul>
      {
        labels.map(({ id, name }) => (
          <Button key={id} onClick={() => onClick(id)} checked={id === checkedValue}>
            {name}
          </Button>
        ))
      }
    </ul>
  );
}
