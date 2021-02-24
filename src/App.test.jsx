import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render, waitFor } from '@testing-library/react';

import App from './App';
// import { loadCategories, loadRegions, loadRestaurants } from './actions';

jest.mock('react-redux');
jest.mock('./services/api');
// jest.mock('./actions');

describe('App', () => {
  const dispatch = jest.fn();
  // const asyncFunction = jest.fn();

  function useSelectorMockMaker(store) {
    useSelector.mockImplementation((selector) => selector(store));
  }

  beforeEach(() => {
    jest.resetAllMocks();

    // loadRegions.mockImplementation(() => asyncFunction);
    // loadCategories.mockImplementation(() => asyncFunction);
    // loadCategories.mockImplementation(() => asyncFunction);

    useDispatch.mockImplementation(() => dispatch);
  });

  context('without selectCategoryId and selectRegionId', () => {
    it('renders regions and categories', () => {
      useSelectorMockMaker({
        regions: [{ id: 1, name: '서울' }],
        categories: [{ id: 1, name: '한식' }],
        restaurants: [{ id: 1, name: '양천주가' }],
      });

      const { queryByText } = render(<App />);

      expect(dispatch).toBeCalledTimes(2);

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
      expect(queryByText('양천주가')).not.toBeNull();
    });
  });

  context('with selectCategoryId and selectRegionId', () => {
    it('renders regions and categories and restaurants', async () => {
      useSelectorMockMaker({
        regions: [{ id: 1, name: '서울' }],
        categories: [{ id: 1, name: '한식' }],
        restaurants: [],
        selectRegionId: 1,
        selectCategoryId: 1,
      });

      const { queryByText, getByText } = render(<App />);

      expect(dispatch).toBeCalledTimes(3);

      expect(queryByText('서울(V)')).not.toBeNull();
      expect(queryByText('한식(V)')).not.toBeNull();

      await waitFor(() => expect(getByText('양천주가')).toBeInTheDocument());
    });
  });
});
