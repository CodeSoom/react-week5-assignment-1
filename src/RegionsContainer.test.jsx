import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    regions,
  }))

  it('renders region buttons', () => {
    const { queryByText } = render((<RegionsContainer />))
    
    regions.forEach((region) => {
      expect(queryByText(region.name)).not.toBeNull();
    })
  })
})
