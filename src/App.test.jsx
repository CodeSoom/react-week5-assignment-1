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
    it('renders regions and categories', async () => {
      const { queryByText } = render(<App />);

      expect(dispatch).toBeCalledTimes(2);

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
      expect(queryByText('양천주가')).not.toBeNull();
    });
  });

  context('with selectedCategory and selectedRegion', () => {
    it('renders regions and categories and restaurants', async () => {
      given('selectedRegion', () => (
        { id: 1, name: '서울' }
      ));

      given('selectedCategory', () => (
        { id: 1, name: '한식' }
      ));

      const { queryByText } = render(<App />);

      expect(dispatch).toBeCalledTimes(3);

      expect(queryByText('서울(V)')).not.toBeNull();
      expect(queryByText('한식(V)')).not.toBeNull();
    });
  });
});
