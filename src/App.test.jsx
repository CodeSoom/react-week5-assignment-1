import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders title', () => {
    const { container } = render(<App />);

    expect(container).toHaveTextContent(/Restaurant List/);
  });

  it('renders region button', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('서울')).not.toBeNull();
  });
});
