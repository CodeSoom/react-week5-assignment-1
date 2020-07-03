import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

import { regions } from '../fixtures/restaurants';

describe('App', () => {
  it('show restaurant regions', () => {
    const { getByText } = render((
      <App />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
