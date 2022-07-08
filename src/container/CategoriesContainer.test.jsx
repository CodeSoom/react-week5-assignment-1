import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

import { getCategories } from '../store/async-actions';

jest.mock('react-redux');
jest.mock('../store/async-actions');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  function renderCategoriesContainer() {
    return render(
      <CategoriesContainer />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('categories API를 호출합니다.', () => {
    const { container } = renderCategoriesContainer();

    expect(dispatch).toHaveBeenCalledWith(getCategories());
    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('카테고리 목록이 보여집니다.', () => {
    const { container } = renderCategoriesContainer();

    expect(container).toHaveTextContent('한식');
    expect(container).toHaveTextContent('양식');
  });
});
