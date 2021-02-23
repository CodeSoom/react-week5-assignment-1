import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from './fixtures/mockData';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockImplementationOnce((selector) => selector({ regions }));
    useDispatch.mockImplementationOnce(() => dispatch);
  });

  it('should dispatch when mounted', () => {
    render(<RegionsContainer />);
    expect(dispatch).toHaveBeenCalled();
  });

  it('should render regions', () => {
    const { getByRole } = render(<RegionsContainer />);

    regions.forEach((region) => {
      expect(getByRole('list')).toHaveTextContent(region.name);
    });
  });
});
