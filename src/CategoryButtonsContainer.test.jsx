import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoryButtonsContainer from './CategoryButtonsContainer';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();

  useSelector.mockImplementation((selector) => selector({
    category: '',
  }));
});

describe('CategoryButtonsContainer', () => {
  it('renders restaurant category buttons', () => {
    const { getByText } = render(<CategoryButtonsContainer />);

    expect(getByText('한식')).not.toBeNull();
  });
});
