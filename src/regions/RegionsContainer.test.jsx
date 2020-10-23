import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const selectedRegion = regions[0].name;
  const unselectedRegion = regions[1].name;

  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    region: {
      regions,
      selectedName: selectedRegion,
    },
  }));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders region, renders selected region, calls dispatch if clicked', () => {
    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText(unselectedRegion)).not.toBeNull();

    expect(queryByText(selectedRegion.concat('(V)'))).not.toBeNull();

    fireEvent.click(queryByText(unselectedRegion));

    expect(dispatch).toBeCalledWith({
      type: 'selectRegion',
      payload: {
        regionName: unselectedRegion,
      },
    });
  });

  context('when user clicks unselected region', () => {
    it('calls dispatch 2 times', () => {
      const { queryByText } = render(<RegionsContainer />);

      fireEvent.click(queryByText(unselectedRegion));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when user clicks already selected region', () => {
    it('calls dispatch 1 time', () => {
      const { queryByText } = render(<RegionsContainer />);

      fireEvent.click(queryByText(selectedRegion.concat('(V)')));

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
