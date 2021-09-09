import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('App', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));
  it('renders categories', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('한식')).not.toBeNull();
  });
});
