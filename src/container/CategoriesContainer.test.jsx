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

  it('getCategories를 dispatch 합니다.', () => {
    const { container } = renderCategoriesContainer();

    expect(dispatch).toHaveBeenCalledWith(getCategories());

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
