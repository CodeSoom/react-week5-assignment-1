import React from 'react';

import Button from './Button';

export default function ButtonList({ labels, onClick }) {
  return (
    <ul>
      {
        labels.map(({ id, name }) => (
          <li><Button key={id} onClick={onClick}>{name}</Button></li>
        ))
      }
    </ul>
  );
}
