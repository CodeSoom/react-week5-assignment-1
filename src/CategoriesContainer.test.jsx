import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import { selectCategory } from './actions';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

beforeEach(() => {
  jest.clearAllMocks();
});

describe('CategoriesContainer', () => {
  it('categories 렌더링', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories: [{
        id: 1,
        name: '테스트',
      }],
    }));

    const { getByText } = render(<CategoriesContainer />);

    expect(getByText('테스트')).not.toBeNull();

    fireEvent.click(getByText('테스트'));

    expect(dispatch).toBeCalledWith(selectCategory({ categoryId: 1 }));
  });
});
