import React from 'react';

import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  it('renders regions', () => {
    const { getByText } = render((
      <Regions regions={regions} />
    ))
    
    regions.forEach((region) => {
      expect(getByText(region.name)).not.toBeNull();
    })
  })
})
