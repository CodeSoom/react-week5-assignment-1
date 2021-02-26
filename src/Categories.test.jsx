import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  it('renders categories', () => {
    const { queryByText } = render((
      <Categories categories={categories} />
    ))
    
    categories.forEach((category) => {
      expect(queryByText(category.name)).not.toBeNull();
    })
  })
})
