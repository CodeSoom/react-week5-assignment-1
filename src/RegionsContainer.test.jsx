import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import { selectRegion, loadRestaurants } from './actions';

import {
  regions, regionName, categoryId,
} from '../fixture/test-data';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions, regionName, categoryId,
  }));

  const renderRegionsContainer = () => render((
    <RegionsContainer />
  ));

  context('when region button is clicked', () => {
    it('occurs selectRegion and loadRestaurants', () => {
      const { getByText } = renderRegionsContainer();

      fireEvent.click(getByText(/대전/));

      expect(dispatch).toHaveBeenNthCalledWith(1, selectRegion('대전'));
      expect(dispatch).toHaveBeenNthCalledWith(2, loadRestaurants({
        regionName: '대전',
        categoryId,
      }));
    });
  });
});
