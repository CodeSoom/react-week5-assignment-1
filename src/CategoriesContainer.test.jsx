import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import categories from '../__fixtures__/categories';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const renderCategoriesContainer = () => render(
    <CategoriesContainer />,
  );

  it('renders categories', () => {
    const { container } = renderCategoriesContainer();

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
