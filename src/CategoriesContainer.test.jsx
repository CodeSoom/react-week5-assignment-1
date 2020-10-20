import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import categories from '../__fixtures__/categories';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const { container } = render((
    <CategoriesContainer />
  ));

  categories.forEach(({ name }) => {
    expect(container).toHaveTextContent(name);
  });
});
