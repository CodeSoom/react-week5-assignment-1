import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';
import restaurants from '../fixtures/restaurants';

jest.mock('react-redux');

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

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('지역이 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    categories.forEach(({ name }) => {
      expect(getByText(new RegExp(name))).not.toBeNull();
    });
  });

  it('카테고리가 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    regions.forEach(({ name }) => {
      expect(getByText(new RegExp(name))).not.toBeNull();
    });
  });

  it('레스토랑 목록이 보인다.', () => {
    const { getByText } = render(
      <App />,
    );

    restaurants.forEach(({ name }) => {
      expect(getByText(new RegExp(name))).not.toBeNull();
    });
  });
});
