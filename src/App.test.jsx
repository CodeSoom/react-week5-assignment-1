import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

import regions from '../fixtures/regions';

test('App', () => {
  const foods = [
    {
      id: 1, name:'한식',
    },
  ];
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    foods: [],
  }));

  const { getByText } = render((
    <App foods={foods} />
  ));

  expect(getByText('서울')).not.toBeNull();
  expect(getByText('대구')).not.toBeNull();
  expect(getByText('강원도')).not.toBeNull();

  expect(getByText('한식')).not.toBeNull();
});