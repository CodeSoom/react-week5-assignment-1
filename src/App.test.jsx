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
      selectRegionId: given.selectRegionId || null,
      selectCategoryId: given.selectCategoryId || null,
    }));
  });

  context('without selectCategoryId and selectRegionId', () => {
    it('renders regions and categories', async () => {
      const { queryByText } = render(<App />);

      expect(dispatch).toBeCalledTimes(2);

      expect(queryByText('서울')).not.toBeNull();
      expect(queryByText('한식')).not.toBeNull();
      expect(queryByText('양천주가')).not.toBeNull();
    });
  });

  context('with selectCategoryId and selectRegionId', () => {
    it('renders regions and categories and restaurants', async () => {
      given('selectRegionId', () => 1);
      given('selectCategoryId', () => 1);

      const { queryByText } = render(<App />);

      expect(dispatch).toBeCalledTimes(3);

      expect(queryByText('서울(V)')).not.toBeNull();
      expect(queryByText('한식(V)')).not.toBeNull();
    });
  });
});
