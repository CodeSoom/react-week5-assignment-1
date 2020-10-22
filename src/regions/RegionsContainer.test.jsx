import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const setState = (selectedRegionName, selectedCategoryId) => {
    useSelector.mockImplementation((selector) => selector({
      region: {
        regions,
        selectedName: selectedRegionName,
      },
      category: {
        selectedId: selectedCategoryId,
      },
    }));
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders region name, renders clicked name, calls dispatch', () => {
    setState('부산', 2);

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

  context('when clicked name is different with previous selected name and category has been selected', () => {
    beforeEach(() => {
      setState('부산', 1);
    });

    it('calls dispatch 2 times', () => {
      const { queryByText } = render(<RegionsContainer />);

      fireEvent.click(queryByText(/서울/));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when clicked name is the same with previous selected name', () => {
    beforeEach(() => {
      setState('부산', 1);
    });
    it('calls dispatch 1 time', () => {
      const { queryByText } = render(<RegionsContainer />);

      fireEvent.click(queryByText(/부산/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when region has not been selected', () => {
    beforeEach(() => {
      setState('서울', null);
    });
    it('calls dispatch 1 time', () => {
      const { queryByText } = render(<RegionsContainer />);

      fireEvent.click(queryByText(/부산/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when clicked name is the same with previous selected name and category has been selected', () => {
    beforeEach(() => {
      setState('부산', null);
    });
    it('calls dispatch 1 time', () => {
      const { queryByText } = render(<RegionsContainer />);

      fireEvent.click(queryByText(/부산/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
