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

  it('renders category buttons', () => {
    const { getByText } = render((<RegionsContainer />))
    
    regions.forEach((region) => {
      expect(getByText(region.name)).not.toBeNull();
    })
  })
})
