import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders region buttons', () => {
    const { getByText } = render(<App />)

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
  })
})