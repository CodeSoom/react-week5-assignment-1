import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('shows app name', () => {
    const { getByText } = render((
      <App />
    ));

    expect(getByText('Restaurants')).not.toBeNull();
  });
});
