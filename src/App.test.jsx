import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [],
  }));

  const { queryByText } = render(
    <App />,
  );

  it('fetches Regions', () => {
    expect(dispatch).toBeCalledWith({
      type: 'fetchRegions',
    });

    expect(queryByText(/서울/)).not.toBeNull();
  });
});
