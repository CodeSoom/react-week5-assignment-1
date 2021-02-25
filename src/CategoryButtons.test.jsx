import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CategoryButtons from './CategoryButtons';

import categories from './__fixture__/categories';

beforeEach(() => {
  jest.clearAllMocks();
});

describe('CategoryButtons', () => {
  const handleClick = jest.fn();

  function renderCategoryButtons(currentCategory) {
    return render((
      <CategoryButtons
        categories={categories}
        onClick={handleClick}
        currentCategory={currentCategory}
      />
    ));
  }

  context('without current category', () => {
    const currentCategory = '';

    it('renders restaurant category buttons', () => {
      const { getByText } = renderCategoryButtons(currentCategory);

      expect(getByText('한식')).not.toBeNull();
    });

    it('marks the clicked button', () => {
      const { getByText } = renderCategoryButtons();

      fireEvent.click(getByText('한식'));

      expect(handleClick).toBeCalled();
    });
  });

  context('with current category', () => {
    const currentCategory = '한식';

    it('appends "V" mark into the button text', () => {
      const { getByText } = renderCategoryButtons(currentCategory);

      expect(getByText('한식V')).not.toBeNull();
    });
  });
});
