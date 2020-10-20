import React from 'react';
import { render, screen } from '@testing-library/react';

import LocaleList from './LocaleList';

test('LocaleList', () => {
  render(<LocaleList />);

  expect(screen.getByText('서울')).toBeInTheDocument();
});
