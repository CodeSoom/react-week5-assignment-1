import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({ regions }));

  const { queryByText } = render(<App />);

  expect(queryByText(/서울/)).not.toBeNull();
});
