import React from 'react';

import regions from '../fixtures/regions';

import ButtonTemplate from './ButtonTemplate';

export default function RegionsContainer() {
  return (
    <ButtonTemplate buttons={regions} />
  );
}
