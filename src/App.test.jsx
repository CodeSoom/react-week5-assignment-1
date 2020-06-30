import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('renders region buttons', () => {
    // given
    // when
    render(<App />);
    // then
    expect(screen.getByRole('button', { name: '서울' }));
    expect(screen.getByRole('button', { name: '대전' }));
  });
});
