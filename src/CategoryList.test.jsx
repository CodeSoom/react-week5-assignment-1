import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import CategoryList from './CategoryList';
import { categoriesFixture } from '../fixtures/fixtures';

describe('CategoryList', () => {
  const handleSelectClick = jest.fn();

  const categoryListRender = ({ categories, categoryState }) => render((
    <CategoryList
      categories={categories}
      categoryState={categoryState}
      onSelectCategoryClick={handleSelectClick}
    />
  ));

  context('with categories', () => {
    it('see renders categories', () => {
      const categoryState = 1;
      const { getByText } = categoryListRender({
        categories: categoriesFixture,
        categoryState,
      });

      categoriesFixture.forEach(({ id, name }) => {
        if (categoryState === id) {
          expect(getByText(`${name}(V)`)).not.toBeNull();
          return;
        }
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a category', () => {
      const { getByText } = categoryListRender({
        categories: categoriesFixture,
        categoryState: null,
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
      const { container } = categoryListRender({ categories, categoryState: null });

      expect(container).toBeEmptyDOMElement();
    });
  });
});
