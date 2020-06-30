import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

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

  it('check on the button when clicked', () => {
    // when
    render(<App />);
    const button = screen.getByRole('button', { name: '한식' });
    fireEvent.click(button);
    // then
    expect(screen.getByDisplayValue()).toBe('한식(v)');
  });
});
