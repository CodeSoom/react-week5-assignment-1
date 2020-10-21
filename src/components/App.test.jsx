import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    regionStore: {
      regions: [],
    },
  }));

  const { getByText } = render(<App />);

  expect(getByText());
});
