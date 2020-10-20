import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('App', () => {
  render(<App />);

  expect(screen.getByText('서울')).toBeInTheDocument();
  expect(screen.getByText('한식')).toBeInTheDocument();
});
