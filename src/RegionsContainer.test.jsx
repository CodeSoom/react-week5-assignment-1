import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockReturnValue(dispatch);

    useSelector.mockImplementation((selector) => selector({
      filter: {
        regionName: null,
        categoryId: null,
      },
      regions,
    }));
  });

  it('renders', () => {
    const { container } = render(<RegionsContainer />);

    expect(container).not.toBeNull();
  });
});
