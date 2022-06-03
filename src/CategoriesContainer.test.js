import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';
import { chooseCategory } from './actions';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  it('renders', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
      selectedCategory: { id: '', name: '' },
    }));

    const { container } = render(<CategoriesContainer />);

    expect(container).toHaveTextContent('한식');
  });

  it('check the clicked category', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      selectedCategory: { id: '', name: '' },
      categories: [
        { id: 1, name: '한식' },
      ],
    }));

    const { getByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalledWith(chooseCategory({ id: 1, name: '한식' }));
  });
});
