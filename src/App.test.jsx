import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { regions } from '../fixtures/restaurants';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
  });

  it('show restaurant regions', () => {
    const { getByText } = render((
      <App />
    ));

    regions.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
