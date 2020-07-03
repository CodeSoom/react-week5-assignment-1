import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RestaurantCategoriesContainer from './RestaurantCategoriesContainer';

import { categories } from '../fixtures/restaurants';
import {
  setCategory,
} from './actions';

jest.mock('react-redux');

describe('RestaurantCategoriesContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));
  });

  it('show restaurant categories', () => {
    const { getByText } = render((
      <RestaurantCategoriesContainer />
    ));

    categories.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });

  it('분류 중 하나를 클릭 시 dispatch가 호출된다.', () => {
    const { getByText } = render((
      <RestaurantCategoriesContainer />
    ));

    fireEvent.click(getByText('한식'));
    expect(dispatch).toBeCalledWith(setCategory('한식'));
  });
});
