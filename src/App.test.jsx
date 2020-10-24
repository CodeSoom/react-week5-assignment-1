import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import categories from '../fixtures/categories';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { getByText } = render((
    <App />
  ));

  expect(getByText('서울')).not.toBeNull();

  expect(getByText('한식')).not.toBeNull();
});
