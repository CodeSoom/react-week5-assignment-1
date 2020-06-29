import React from 'react';
import Regions from './Regions';

import regions from '../fixtures/regions';

export default function App() {
  return (
    <>
      <Regions regions={regions} />
    </>
  );
}
