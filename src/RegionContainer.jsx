import React from 'react';

import Region from './Region';

import { regions } from '../fixtures/regions';

export default function RegionContainer() {
  return <Region regions={regions} />;
}
