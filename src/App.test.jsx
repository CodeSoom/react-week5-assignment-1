import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  it('categories', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        {
          id: 1, name: '분식집',
        },
      ],
      regions: [],
      restaurants: [],
      selectedCatId: 0,
      selectedRegionId: '',
    }));

    const { getByText } = render((
      <App />
    ));

    expect(getByText('분식집')).not.toBeNull();
  });
  it('show regions', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [],
      regions: [
        {
          id: 1, name: '서울',
        },
        {
          id: 2, name: '경기도',
        },
      ],
      restaurants: [],
      selectedCatId: 0,
      selectedRegionId: '',
    }));

    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('경기도')).not.toBeNull();
  });

  describe('restaurants', () => {
    it('when category and region are both selected', () => {
      useSelector.mockImplementation((selector) => selector({
        restaurants: [
          {
            id: 1, name: '양천주가',
          },
        ],
        categories: [],
        regions: [],
        restaurant: {},
        selectedCatId: 1,
        selectedRegionId: '서울',
      }));

      const { getByText } = render((
        <App />
      ));

      expect(getByText(/양천주가/)).not.toBeNull();
    });
  });
});
