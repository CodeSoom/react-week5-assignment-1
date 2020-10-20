import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');

test('App', () => {
  useSelector.mockImplementation((selector) => selector({
    locales: [
      { id: 1, name: '서울' },
    ],
  }));

  render(<App />);

  expect(screen.getByText('서울')).toBeInTheDocument();
});
