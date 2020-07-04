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
  const renderCategoriesContainer = () => render((
    <CategoriesContainer />
  ));

  context('when category is clicked and region name is defined', () => {
    it('occurs selectCategory and loadRestaurants', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        categories, categoryId, regionName,
      }));

      const { getByText } = renderCategoriesContainer();

      fireEvent.click(getByText(/한식/));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when category is clicked and region name is undefined', () => {
    it('occurs selectCategory', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        categories,
        categoryId,
        regionName: undefined,
      }));

      const { getByText } = renderCategoriesContainer();

      fireEvent.click(getByText(/한식/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
