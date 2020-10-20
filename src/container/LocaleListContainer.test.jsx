import React from 'react';
import { useSelector } from 'react-redux';
import { render, screen } from '@testing-library/react';

import LocaleListContainer from './LocaleListContainer';
import locales from '../../fixtures/locales';

jest.mock('react-redux');

test('LocaleListContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    locales,
  }));

  render(<LocaleListContainer />);

  expect(screen.getByText('서울')).toBeInTheDocument();
});
