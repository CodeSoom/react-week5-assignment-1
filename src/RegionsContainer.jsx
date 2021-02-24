import React from 'react';

import regions from '../fixtures/regions';

import Buttons from './Buttons';

export default function RegionsContainer() {
  return (
    <Buttons buttons={regions} />
  );
}
