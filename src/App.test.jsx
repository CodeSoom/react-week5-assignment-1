import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import regions from '../__fixtures__/regions';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App Component', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    selected: {
      region: '',
    },
  }));
  it('page render', () => {
    const { container, getByText } = render((
      <App />
    ));

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });

    expect(getByText(/한식/)).not.toBeNull();
    expect(getByText(/중식/)).not.toBeNull();
    expect(getByText(/일식/)).not.toBeNull();
    expect(getByText(/양식/)).not.toBeNull();
    expect(getByText(/분식/)).not.toBeNull();

    expect(getByText(/홍콩반점/)).not.toBeNull();
  });
});
