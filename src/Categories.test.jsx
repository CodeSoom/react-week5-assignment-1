import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  it('renders', () => {
    const { container } = render(<Categories categories={categories} />);

    expect(container).not.toBeNull();
  });
});
