import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

import { getCategories } from '../store/async-actions';

jest.mock('react-redux');
jest.mock('../store/async-actions');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  const selectedCategory = categories[0];

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories,
    selectedCategory,
  }));

  function renderCategoriesContainer() {
    return render(
      <CategoriesContainer />,
    );
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('getCategories를 dispatch 합니다.', () => {
    const { container } = renderCategoriesContainer();

    expect(dispatch).toHaveBeenCalledWith(getCategories());

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('특정 카테고리를 선택하면 selectedCategory가 dispatch와 함께 호출됩니다.', () => {
    const { getByText } = renderCategoriesContainer();

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalled();
  });
});
