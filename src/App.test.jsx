import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';
import categories from '../__fixtures__/categories';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App Component', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    categories,
    selected: {
      region: '',
      category: '',
    },
  }));

  it('page render', () => {
    const { container, getByText } = render((
      <App />
    ));

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });

    expect(getByText(/홍콩반점/)).not.toBeNull();
  });
});
