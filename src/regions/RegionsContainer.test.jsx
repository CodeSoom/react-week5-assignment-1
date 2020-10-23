import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const setState = ({ selectedRegion }) => {
    useSelector.mockImplementation((selector) => selector({
      region: {
        regions,
        selectedName: selectedRegion,
      },
    }));
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders region, renders clicked region, calls dispatch if clicked', () => {
    setState({ selectedRegion: '부산' });

    const { queryByText } = render(<RegionsContainer />);

    expect(queryByText(/서울/)).not.toBeNull();

    expect(queryByText(/부산\(V\)/)).not.toBeNull();

    fireEvent.click(queryByText(/서울/));

    expect(dispatch).toBeCalledWith({
      type: 'selectRegion',
      payload: {
        regionName: '서울',
      },
    });
  });

  context('when user clicks not selected region', () => {
    beforeEach(() => {
      setState({ selectedRegion: '부산' });
    });

    it('calls dispatch 2 times', () => {
      const { queryByText } = render(<RegionsContainer />);

      fireEvent.click(queryByText(/서울/));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when user clicks selected region', () => {
    beforeEach(() => {
      setState({ selectedRegion: '부산' });
    });

    it('calls dispatch 1 time', () => {
      const { queryByText } = render(<RegionsContainer />);

      fireEvent.click(queryByText(/부산\(V\)/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
