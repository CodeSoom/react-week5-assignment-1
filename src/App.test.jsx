import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import categories from '../fixtures/categories';
import regions from '../fixtures/regions';

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
});
