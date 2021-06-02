import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../redux_module/selectedSlice';

import CategoryListContainer from './CategoryListContainer';

jest.mock('react-redux');

describe('CategoryListContainer', () => {
  it('', () => {
    useSelector.mockImplementation((selector) => selector({
      selected: {
        category: '한식',
      },
      groups: {
        categories: ['한식', '중식'],
      },
    }));

    const { getByRole, queryByRole } = render(<CategoryListContainer />);

    expect(getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
    expect(queryByRole('button', { name: '한식' })).not.toBeInTheDocument();

    expect(getByRole('button', { name: '중식' })).toBeInTheDocument();
  });

  it('', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      selected: {
        category: '한식',
      },
      groups: {
        categories: ['한식', '중식'],
      },
    }));

    const { getByRole } = render(<CategoryListContainer />);

    fireEvent.click(getByRole('button', { name: '한식(V)' }));
    expect(dispatch).toBeCalledWith(selectCategory('한식'));

    fireEvent.click(getByRole('button', { name: '중식' }));
    expect(dispatch).toBeCalledWith(selectCategory('중식'));
  });
});
