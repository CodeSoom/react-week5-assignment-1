import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';

import CATEGORIES from '../fixtures/categories';

describe('<Categories />', () => {
  const handleSelectCategory = jest.fn();

  const renderCategories = ({ categories = [], selectedCategoryId = null }) => render((<Categories
    categories={categories}
    selectedCategoryId={selectedCategoryId}
    selectCategory={handleSelectCategory}
  />));

  beforeEach(() => {
    handleSelectCategory.mockClear();
  });

  context('without categories', () => {
    it('renders "카테고리를 불러오지 못했습니다."', () => {
      const { getByText } = renderCategories({ categories: [] });

      expect(getByText('카테고리를 불러오지 못했습니다.')).toBeInTheDocument();
    });
  });

  context('with categories', () => {
    it('renders categories', () => {
      const { container } = renderCategories({ categories: CATEGORIES });

      CATEGORIES.forEach((category) => {
        expect(container).toHaveTextContent(category.name);
      });
    });

    describe('click category', () => {
      it('calls handleSelectCategory', () => {
        const category = CATEGORIES[0];

        const { getByText } = renderCategories({ categories: CATEGORIES });

        expect(handleSelectCategory).not.toBeCalled();

        fireEvent.click(getByText(category.name));

        expect(handleSelectCategory).toBeCalledWith(category.id);
      });
    });
  });

  context('with selected category id', () => {
    it('selected category is shown', () => {
      const category = CATEGORIES[0];

      const { container } = renderCategories({
        categories: CATEGORIES,
        selectedCategoryId: category.id,
      });

      expect(container).toHaveTextContent(`${category.name}(V)`);
    });
  });

  context('without selected category id', () => {
    it('selected category is not shown', () => {
      const { container } = renderCategories({
        categories: CATEGORIES,
        selectedCategoryId: null,
      });

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
