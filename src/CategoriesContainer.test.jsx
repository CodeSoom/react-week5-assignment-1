import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { selectCategory } from './actions';

import {
  categories, regionName, categoryId,
} from '../fixture/test-data';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories, regionName, categoryId,
  }));

  const renderCategoriesContainer = () => render((
    <CategoriesContainer />
  ));

  context('when category button is clicked', () => {
    it('occurs selectCategory and loadRestaurants', () => {
      const { getByText } = renderCategoriesContainer();

      fireEvent.click(getByText(/한식/));

      expect(dispatch).toBeCalledTimes(2);
      expect(dispatch).toHaveBeenNthCalledWith(1, selectCategory(1));
      // TODO: asynchronous action test
    });
  });
});
