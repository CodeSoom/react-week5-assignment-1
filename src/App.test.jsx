import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [],
  }));

  it('shows app name', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('Restaurants')).not.toBeNull();
  });
});
