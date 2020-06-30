import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import Regions from './Regions';

jest.mock('react-redux');

describe('App', () => {
  it('should display regions', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
    }));

    const { getByText } = render((
      <Regions />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
