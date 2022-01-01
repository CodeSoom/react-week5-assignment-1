import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import CategoryListContainer from './CategoryListContainer';
import { changeCategory } from './store/actions';
import { CATEGORIES } from './fixture';

jest.mock('react-redux');

describe('CategoryListContainer', () => {
  const dispatch = jest.fn();

  const renderCategoryListContainer = () => render(<CategoryListContainer />);

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      selected: {
        categoryId: null,
      },
      categories: CATEGORIES,
    }));
    useDispatch.mockImplementation(() => dispatch);
  });

  it('CategoryListContainer 렌더링', () => {
    const { container } = renderCategoryListContainer();

    expect(container).not.toBeNull();
  });

  it('렌더링 시, 카테고리 리스트가 노출된다.', () => {
    const { container } = renderCategoryListContainer();

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('중식');
  });

  it('버튼 클릭 시, changeCategory 가 dispatch 된다.', () => {
    const { getByRole } = renderCategoryListContainer();

    const button = getByRole('button', { name: /한식/ });
    fireEvent.click(button);

    expect(dispatch).toBeCalledWith(changeCategory(1));
    expect(dispatch).toBeCalledTimes(2);
  });
});
