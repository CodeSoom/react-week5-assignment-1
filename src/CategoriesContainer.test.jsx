import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../__fixture__/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  it('get categories', () => {
    const { getByRole } = render(
      <CategoriesContainer />,
    );

    categories.forEach((category) => {
      getByRole('button', { name: category.name });
    });
  });
});
