import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  const { getByText } = render((
    <App />
  ));

  expect(getByText('서울')).not.toBeNull();
});
