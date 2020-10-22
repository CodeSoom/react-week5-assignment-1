import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoryContainer from './CategoryContainer';

import categories from '../../fixtures/categories';

jest.mock('react-redux');

describe('CategoryContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    selectedCategory: -1,
    categories,
  }));

  function renderCategoryContainer() {
    return render((
      <CategoryContainer />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('show category buttons', () => {
    const { getByText } = renderCategoryContainer();

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
  });

  describe('select category', () => {
    it('change selected category', () => {
      const { getByText } = renderCategoryContainer();

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalledWith({
        type: 'selectCategory',
        payload: {
          id: 1,
        },
      });
    });
  });
});
