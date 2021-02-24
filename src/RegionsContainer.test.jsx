import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from './fixtures/mockData';
import { WATCH_THE_REGION } from './actions';

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
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should render regions', () => {
    const { getByRole } = render(<RegionsContainer />);

    regions.forEach((region) => {
      expect(getByRole('list')).toHaveTextContent(region.name);
    });
  });

  it('should change button text when clicked', () => {
    const { getByText } = render(<RegionsContainer />);
    const id = 8;
    const region = regions.find((data) => data.id === id);

    fireEvent.click(getByText(region.name));
    expect(dispatch).toHaveBeenCalledWith({ type: WATCH_THE_REGION, payload: id });
  });
});
