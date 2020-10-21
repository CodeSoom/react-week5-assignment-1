import React from 'react';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('renders', () => {
    const { container } = render(<CategoriesContainer />);

    expect(container).not.toBeNull();
  });
});
