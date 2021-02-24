import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { categories } from '../fixtures';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));
  });

  it('renders categories buttons', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('중식')).not.toBeNull();
    expect(queryByText('일식')).not.toBeNull();

    // identical assertions on the rest of the categories
    categories
      .filter((category, index) => index > 2)
      .forEach(({ name }) => {
        expect(queryByText(name)).not.toBeNull();
      });
  });
});
