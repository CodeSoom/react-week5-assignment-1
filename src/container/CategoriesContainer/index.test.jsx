import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../../../fixtures/categories';

jest.mock('react-redux');
jest.mock('../../services/api');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories,
      search: {
        categoryId: '',
      },
    }));
  });
  it('renders CategoriesContainer', () => {
    const { getByRole } = render(<CategoriesContainer values={categories} />);

    categories.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });

  it('passes "changeSearch" action', () => {
    const { getByRole } = render(<CategoriesContainer values={categories} />);

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByRole('button', { name: '한식' }));

    expect(dispatch).toBeCalledWith({
      type: 'changeSearch',
      payload: {
        search: 'categoryId',
        value: 1,
      },
    });
  });
});
