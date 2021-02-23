import React from 'react';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  it('renders categories', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText('한식')).not.toBeNull();
  });
});
