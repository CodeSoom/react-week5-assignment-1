import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

import regions from '../../fixtures/regions';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regionStore: {
      regions,
    },
  }));

  const { getByText } = render(<App />);

  expect(getByText(/서울/)).not.toBeNull();
  expect(getByText(/한식/)).not.toBeNull();
  expect(getByText(/김초밥/)).not.toBeNull();
});
