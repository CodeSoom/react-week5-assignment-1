import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import CategoryList from './CategoryList';
import { categoriesFixture } from '../fixtures/fixtures';

describe('CategoryList', () => {
  const handleSelectClick = jest.fn();

  const categoryListRender = (categories) => render((
    <CategoryList
      categories={categories}
      onSelectCategoryClick={handleSelectClick}
    />
  ));

  context('with categories', () => {
    it('see renders categories', () => {
      const { getByText } = categoryListRender(categoriesFixture);

      categoriesFixture.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a category', () => {
      const { getByText } = categoryListRender(categoriesFixture);

      categoriesFixture.forEach(({ name, id }) => {
        fireEvent.click(getByText(name));

        expect(handleSelectClick).toBeCalledWith(id);
      });
    });
  });

  context('without categories', () => {
    const categories = [];

    it('nothing render categories', () => {
      const { container } = categoryListRender(categories);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
