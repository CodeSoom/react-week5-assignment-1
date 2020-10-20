import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import LocaleListContainer from './LocaleListContainer';

jest.mock('react-redux');

test('LocaleListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    locales: [
      { id: 1, name: '서울' },
    ],
  }));

  render(<LocaleListContainer />);

  expect(screen.getByText('서울')).toBeInTheDocument();
});
