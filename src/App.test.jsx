import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();

  useSelector.mockImplementation((selector) => selector({
    currentRegion: '',
  }));
});

describe('App', () => {
  it('renders restaurant region buttons', () => {
    const { getByText } = render(<App />);

    expect(getByText('서울')).not.toBeNull();
  });
});
