import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = useDispatch();

  beforeEach(() => {
    useSelector.mockImplementation(() => ({
      categories: [
        { id: 1, name: '한식' },
      ],
      selectedCategory: { category: { id: 1, name: '한식' } },
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders categories list', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText(/한식/)).not.toBeNull();
  });

  it('handleClick event and dispatches selecteCategory', () => {
    const { queryByText } = render(<CategoriesContainer />);

    fireEvent.click(queryByText('한식'));

    expect(dispatch).toBeCalledWith({
      type: 'selecteCategory',
      payload: { category: { id: 1, name: '한식' } },
    });
  });
});
