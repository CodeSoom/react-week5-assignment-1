import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { regions } from '../fixtures/restaurants';

import {
  selectRegion,
} from './actions';

jest.mock('react-redux');

describe('RestaurantRegionContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      region: '',
      regions,
    }));
  });

  it('레스토랑 지역 목록을 화면에 보여준다.', () => {
    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });

  it('선택한 지역을 region에 담는다.', () => {
    const region = '광주';
    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    fireEvent.click(getByText('광주'));
    expect(dispatch).toBeCalledWith(selectRegion(region));
  });
});
