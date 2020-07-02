import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

import { regions } from '../fixtures/restaurants';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });
  it('레스토랑 지역 목록을 보여준다.', () => {
    const { getByText } = render((
      <App />
    ));

    expect(dispatch).toBeCalledTimes(1);

    regions.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });
});
