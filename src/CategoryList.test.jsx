import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import CategoryList from './CategoryList';
import { categoriesFixture } from '../fixtures/fixtures';

describe('CategoryList', () => {
  const handleSelectClick = jest.fn();

  const categoryListRender = ({ categories, categoryId }) => render((
    <CategoryList
      categories={categories}
      categoryId={categoryId}
      onSelectCategoryClick={handleSelectClick}
    />
  ));

  context('with categories', () => {
    it('see renders categories', () => {
      const categoryId = 1;
      const { getByText } = categoryListRender({
        categories: categoriesFixture,
        categoryId,
      });

      categoriesFixture.forEach(({ id, name }) => {
        if (categoryId === id) {
          expect(getByText(`${name}(V)`)).not.toBeNull();
          return;
        }
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a category', () => {
      const { getByText } = categoryListRender({
        categories: categoriesFixture,
        categoryId: null,
      });

      categoriesFixture.forEach(({ name, id }) => {
        fireEvent.click(getByText(name));
        expect(getByText(name)).not.toBeNull();

        expect(handleSelectClick).toBeCalledWith({
          type: 'category',
          id,
        });
      });
    });
  });

  context('without categories', () => {
    const categories = [];

    it('nothing render categories', () => {
      const { container } = categoryListRender({ categories, categoryId: null });

      expect(container).toBeEmptyDOMElement();
    });
  });
});
