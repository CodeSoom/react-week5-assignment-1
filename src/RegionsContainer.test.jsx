import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import { regions, selectedRegion } from '../fixtures/regions';

import { selectRegion } from './actions';

describe('RegionsContainer', () => {
  it('handleClick 테스트', () => {
    const dispatch = jest.fn();

    useSelector.mockImplementation((selector) => selector({
      regions,
      selectedRegion,
    }));
    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <RegionsContainer />
    ));

    fireEvent.click(getByText(/서울/));

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toBeCalledWith(selectRegion(1));
  });
});
