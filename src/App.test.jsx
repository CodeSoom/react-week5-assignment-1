import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import restaurants from '../fixtures/restaurants';

import App from './App';

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({ restaurants }));

  it('renders restaurants', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('양천주가')).not.toBeNull();
    expect(queryByText('한국식 초밥')).not.toBeNull();
    expect(queryByText('김초밥')).not.toBeNull();
  });
});
