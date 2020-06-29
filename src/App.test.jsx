import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import regions from '../fixtures/regions';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => (selector({
    regions,
  })));

  const { getByText } = render((
    <App />
  ));

  expect(getByText('서울')).not.toBeNull();
});
