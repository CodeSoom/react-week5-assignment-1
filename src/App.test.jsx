import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText(/비동기처리/)).not.toBeNull();
});
