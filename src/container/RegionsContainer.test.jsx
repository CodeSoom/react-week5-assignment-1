import React from 'react';
import { render, screen } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

test('RegionsContainer', () => {
  render(<RegionsContainer />);

  expect(screen.getByRole('button', { name: /서울/ })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /대전/ })).toBeInTheDocument();
});
