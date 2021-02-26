import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import given from 'given2';
import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [{ id: 1, name: '한식' }],
      restaurants: [{ id: 1, name: '양천주가' }],
      selectedRegion: given.selectedRegion || null,
      selectedCategory: given.selectedCategory || null,
    }));
  });

  context('without selectedCategory and selectedRegion', () => {
    it('loads regions and categories', async () => {
      render(<App />);

      expect(dispatch).toBeCalledTimes(2);
    });
  });

  context('with selectedCategory and selectedRegion', () => {
    it('loads regions and categories and restaurants', async () => {
      given('selectedRegion', () => (
        { id: 1, name: '서울' }
      ));

      given('selectedCategory', () => (
        { id: 1, name: '한식' }
      ));

      render(<App />);

      expect(dispatch).toBeCalledTimes(3);
    });
  });
});
