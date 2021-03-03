import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryButtons from './CategoryButtons';

import categories from './__fixture__/categories';

describe('CategoryButtons', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const handleClick = jest.fn();

  function renderCategoryButtons(currentCategoryId) {
    return render((
      <CategoryButtons
        categories={categories}
        onClick={handleClick}
        currentCategoryId={currentCategoryId}
      />
    ));
  }

  context('without current category', () => {
    const currentCategoryId = '';

    it('renders restaurant category buttons', () => {
      const { getByText } = renderCategoryButtons(currentCategoryId);

      expect(getByText('한식')).not.toBeNull();
    });

    it('renders "V mark" to the clicked button', () => {
      const { getByText } = renderCategoryButtons();

      fireEvent.click(getByText('한식'));

      expect(handleClick).toBeCalled();
    });
  });

  context('with current category', () => {
    const currentCategoryId = 1;

    it('appends "V" mark into the button text', () => {
      const { getByText } = renderCategoryButtons(currentCategoryId);

      expect(getByText('한식(V)')).not.toBeNull();
    });
  });
});
