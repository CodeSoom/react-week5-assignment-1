import React from 'react';

import ButtonContainer from './ButtonContainer';

export default function Categories({ categories }) {
  return (
    <ul>
      {
        categories && categories.map(({ id, name }) => (
          <li key={id}><ButtonContainer name={name} /></li>
        ))
      }
    </ul>
  );
}
