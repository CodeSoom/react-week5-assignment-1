import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import Categories from './Categories';

import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({ categories }));
  });

  function renderCategories(selectedCategoryName) {
    return render((
      <Categories
        categories={categories}
        onClick={dispatch}
        selectedCategoryName={selectedCategoryName}
      />
    ));
  }

  it('onClick함수가 실행합니다.', () => {
    const { getByText } = renderCategories();

    expect(dispatch).not.toBeCalled();

    fireEvent.click(getByText(/한식/));

    expect(dispatch).toBeCalled();
  });

  it('선택한 값은 V표기 합니다.', () => {
    const selectedCategoryName = '한식';
    const { queryByText } = renderCategories(selectedCategoryName);

    expect(queryByText('한식(V)')).not.toBeNull();
  });
});
