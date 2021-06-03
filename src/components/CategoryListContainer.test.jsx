import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCategory } from '../redux_module/RestaurantSlice';
import CategoryListContainer from './CategoryListContainer';

jest.mock('react-redux');
jest.mock('../servies/api');

describe('CategoryListContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '중식' },
        ],

        regions: ['서울', '부산'],

        selected: {
          category: { id: 1, name: '한식' },
          region: '서울',
        },
      },
    }));
  });

  it('renders buttons with (V) when selected', () => {
    const { getByRole, queryByRole } = render(<CategoryListContainer />);

    expect(getByRole('button', { name: '한식(V)' })).toBeInTheDocument();
    expect(queryByRole('button', { name: '한식' })).not.toBeInTheDocument();

    expect(getByRole('button', { name: '중식' })).toBeInTheDocument();
  });

  it('select category with button', () => {
    const { getByRole } = render(<CategoryListContainer />);

    fireEvent.click(getByRole('button', { name: '한식(V)' }));
    expect(dispatch).toBeCalledWith(selectCategory({ id: 1, name: '한식' }));

    fireEvent.click(getByRole('button', { name: '중식' }));
    expect(dispatch).toBeCalledWith(selectCategory({ id: 2, name: '중식' }));
  });

  it('fetches restaurants with button', () => {
    const { getByRole } = render(<CategoryListContainer />);

    fireEvent.click(getByRole('button', { name: '중식' }));
    expect(typeof dispatch.mock.calls[1][0]).toBe('function');
  });
});
