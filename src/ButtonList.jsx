import React from 'react';

import Button from './Button';

export default function ButtonList({ labels, onClick }) {
  return (
    <ul>
      {
        labels.map(({ id, name }) => (
          <Button key={id} onClick={onClick}>{name}</Button>
        ))
      }
    </ul>
  );
}
