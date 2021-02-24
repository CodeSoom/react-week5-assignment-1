import React from 'react';

import { regions } from '../fixtures';

import Buttons from './Buttons';

export default function RegionsContainer() {
  return (
    <Buttons buttons={regions} />
  );
}
