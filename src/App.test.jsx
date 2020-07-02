import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';
import categories from '../fixtures/categories';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('can see', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => (selector({
      regions: [],
      categories: [],
    })));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('서울')).toBeNull();
    expect(queryByText('한식')).toBeNull();

    expect(dispatch).toBeCalledTimes(2);
  });

  context('region and category selected', () => {
    it('can see restaurants', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => (selector({
        regions,
        categories,
        selectedRegion: '서울',
        selectedCategoryId: 1,
      })));

      const { queryByText } = render((
        <App />
      ));

      expect(queryByText('서울(v)')).not.toBeNull();
      expect(queryByText('한식(v)')).not.toBeNull();
      expect(queryByText('베니스')).not.toBeNull();

      expect(dispatch).toBeCalledTimes(3);
    });
  });
});
