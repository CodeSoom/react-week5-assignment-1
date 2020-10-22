import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../__fixtures__/categories';

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { getByText } = render((
    <CategoriesContainer />
  ));

  categories.forEach(({ name }) => {
    expect(getByText(name)).not.toBeNull();
  });
});
