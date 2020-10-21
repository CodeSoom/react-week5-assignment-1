import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const { container } = render(<App />);

  it('renders', () => {
    expect(container).not.toBeNull();
  });
});
