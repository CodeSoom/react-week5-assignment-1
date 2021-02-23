import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders regions', () => {
    const { queryByText } = render(<App />);
    expect(queryByText('서울')).not.toBeNull();
  });
});
