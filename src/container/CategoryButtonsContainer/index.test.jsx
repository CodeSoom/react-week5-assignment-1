import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryButtonsContainer from '.';

import { categories } from '../../../fixtures/categories';

jest.mock('react-redux');

describe('CategoryButtonsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      categories,
      search: {
        category: '',
      },
    }));
  });
  it('renders CategoryButtonsContainer', () => {
    const { getByRole } = render(<CategoryButtonsContainer values={categories} />);

    categories.forEach(({ name }) => {
      getByRole('button', { name });
    });
  });

  it('passes "changeSearch" action', () => {
    const { getByRole } = render(<CategoryButtonsContainer values={categories} />);

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByRole('button', { name: '한식' }));

    expect(dispatch).toBeCalledWith({
      type: 'changeSearch',
      payload: {
        search: 'category',
        value: '한식',
      },
    });
  });
});
