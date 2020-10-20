import React from 'react';
import { render, screen } from '@testing-library/react';

import LocaleList from './LocaleList';
import locales from '../../fixtures/locales';

test('LocaleList', () => {
  render(<LocaleList locales={locales} />);

  expect(screen.getByText('서울')).toBeInTheDocument();
});
