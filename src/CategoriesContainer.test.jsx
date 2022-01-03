import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { setSelectedCategory } from './actions';

import { categories } from '../__fixtures__/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
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

  it('calls click handler, calls "setSelectedCategory dispatch" with the clicked category', () => {
    const { getByRole } = render(
      <CategoriesContainer />,
    );
    const clickedButton = categories[0];

    fireEvent.click(getByRole('button', { name: clickedButton.name }));

    expect(dispatch).toBeCalledWith(setSelectedCategory(clickedButton));
  });
});
