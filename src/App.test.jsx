import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import { regions } from '../fixtures/restaurants';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  it('show restaurant regions', () => {
    const { getByText } = render((
      <App />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
