import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('renders region buttons', () => {
    // when
    render(<App />);
    // then
    expect(screen.getByRole('button', { name: '서울' }));
    expect(screen.getByRole('button', { name: '대전' }));
  });

  it('renders category buttons', () => {
    // when
    render(<App />);
    // then
    expect(screen.getByRole('button', { name: '한식' }));
    expect(screen.getByRole('button', { name: '중식' }));
  });
});
