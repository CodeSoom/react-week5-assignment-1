import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import {
  regions, regionName, categoryId,
} from '../fixture/test-data';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const renderRegionsContainer = () => render((
    <RegionsContainer />
  ));

  context('when region button is clicked', () => {
    it('occurs selectRegion and loadRestaurants', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        regions,
        regionName,
        categoryId,
      }));

      const { getByText } = renderRegionsContainer();

      fireEvent.click(getByText(/대전/));

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('when region is clicked and category id is undefined', () => {
    it('occurs selectRegion', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        regions,
        regionName,
        categoryId: undefined,
      }));

      const { getByText } = renderRegionsContainer();

      fireEvent.click(getByText(/대전/));

      expect(dispatch).toBeCalledTimes(1);
    });
  });
});
