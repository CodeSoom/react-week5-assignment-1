import { screen, render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import categories from './fixtures/categories';

jest.mock('react-redux');
jest.mock('./services/api');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories: [],
  }));

  it('카테고리 리스트를 화면에 렌더한다.', () => {
    render(<CategoriesContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('카테고리 업데이트 액션을 실행한다.', () => {
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));

    render(<CategoriesContainer />);

    fireEvent.click(screen.getByRole('button', { name: '한식' }));

    expect(dispatch).toBeCalledWith({
      type: 'checkCategory',
      payload: {
        checkedCategoryId: 1,
      },
    });
  });
});
