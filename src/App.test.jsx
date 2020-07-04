import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    selected: {
      region: '',
      categoryId: '',
    },
    categories,
    regions,
    restaurants,
  }));

  it('지역이 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    categories.forEach((category) => {
      const { name } = category;
      const regExp = new RegExp(name);
      expect(getByText(regExp)).not.toBeNull();
    });
  });

  it('카테고리가 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    regions.forEach((region) => {
      const { name } = region;
      const regExp = new RegExp(name);
      expect(getByText(regExp)).not.toBeNull();
    });
  });

  it('레스토랑 목록이 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    restaurants.forEach((restaurant) => {
      const { name } = restaurant;
      const regExp = new RegExp(name);
      expect(getByText(regExp)).not.toBeNull();
    });
  });
});
