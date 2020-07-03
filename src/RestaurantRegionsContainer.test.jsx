import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantRegionsContainer from './RestaurantRegionsContainer';

import { regions } from '../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantRegionsContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  it('show restaurant regions', () => {
    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('지역 중 하나를 클릭 시 dispatch가 호출된다.', () => {
    const { getByText } = render((
      <RestaurantRegionsContainer />
    ));

    fireEvent.click(getByText('서울'));
    expect(dispatch).toBeCalledWith({
      type: 'setRegion',
      payload: {
        region: '서울',
      },
    });
  });
});
