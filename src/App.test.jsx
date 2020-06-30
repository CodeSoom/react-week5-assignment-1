import React from 'react';

import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import App from './App';

jest.mock('./services/api');
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
    // TODO: 더 정밀하게 테스트 할 수 있는 방법은?
    expect(dispatch).toBeCalledTimes(1);
  });
});
