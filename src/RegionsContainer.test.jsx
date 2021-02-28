import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      selected: {
        region: {
          id: '',
          name: '',
        }
      },
    }))
  })
 

  it('renders region buttons', () => {
    const { queryByText } = render((<RegionsContainer />))
    
    regions.forEach((region) => {
      expect(queryByText(region.name)).not.toBeNull();
    })
  })

  it('shows region button with (V)', () => {
    useSelector.mockImplementation((selector) => selector({
      regions,
      selected: {
        region: {
          id: '1',
          name: '서울',
        }
      },
    }))

    const { queryByText } = render((<RegionsContainer />));
    
    expect(queryByText('서울(V)')).not.toBeNull();
  })
})

