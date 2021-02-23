import React from 'react';

import { render } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../fixtures/restaurants';

describe('Categories', () => {
  it('button들을 보여준다.', () => {
    const { queryByText } = render((
      <Categories categories={categories} />
    ));

    categories.forEach((category) => {
      const { name } = category;

      expect(queryByText(name)).not.toBeNull();
    });
  });
});
