import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../__fixtures__/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('get categories, when load', () => {
    const { getByRole } = render(
      <CategoriesContainer />,
    );

    categories.forEach((category) => {
      expect(getByRole('button', { name: category.name })).toBeInTheDocument();
    });
  });
});
