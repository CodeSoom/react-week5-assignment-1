import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));
  it('renders categories', () => {
    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalledWith({
      type: 'setCategories',
      payload: { categories },
    });
    expect(queryByText('한식')).not.toBeNull();
  });
});
