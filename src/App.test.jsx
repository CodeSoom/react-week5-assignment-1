import React from 'react';
import {
  render, screen, fireEvent, act,
} from '@testing-library/react';

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

  it('check when button clicked', () => {
    // when
    render(<App />);
    const regionButton = screen.getByRole('button', { name: '서울' });
    const categoryButton = screen.getByRole('button', { name: '한식' });
    fireEvent.click(regionButton);
    fireEvent.click(categoryButton);
    // then
    expect(screen.getByRole('button', { name: '서울(v)' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '한식(v)' })).toBeInTheDocument();
  });

  it('uncheck when another button clicked', () => {
    // when
    render(<App />);
    const seoulButton = screen.getByRole('button', { name: '서울' });
    const busanButton = screen.getByRole('button', { name: '부산' });
    fireEvent.click(seoulButton);
    fireEvent.click(busanButton);
    // then
    expect(screen.getByRole('button', { name: '서울' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '부산(v)' })).toBeInTheDocument();
  });
});
