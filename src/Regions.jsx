import React from 'react';

import ButtonContainer from './ButtonContainer';

export default function Regions({ regions }) {
  return (
    <ul>
      {
        regions?.map(({ id, name }) => (
          <li key={id}>
            <ButtonContainer
              name={name}
              filterName="regionName"
            />
          </li>
        ))
      }
    </ul>
  );
}
