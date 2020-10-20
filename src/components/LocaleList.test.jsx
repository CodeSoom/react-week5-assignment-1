import React from 'react';
import { render, screen } from '@testing-library/react';

import LocaleList from './LocaleList';

test('LocaleList', () => {
  const locales = [
    { id: 1, name: '서울' },
  ];

  render(<LocaleList locales={locales} />);

  expect(screen.getByText('서울')).toBeInTheDocument();
});
