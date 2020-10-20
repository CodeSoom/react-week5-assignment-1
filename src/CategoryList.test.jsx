import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import CategoryList from './CategoryList';
import { categorysFixture } from '../fixtures/fixtures';

describe('CategoryList', () => {
  const handleSelectClick = jest.fn();

  const categoryListRender = (categorys) => render((
    <CategoryList
      categorys={categorys}
      onSelectCategoryClick={handleSelectClick}
    />
  ));

  context('with categorys', () => {
    it('see renders categorys', () => {
      const { getByText } = categoryListRender(categorysFixture);

      categorysFixture.forEach(({ name }) => {
        expect(getByText(name)).not.toBeNull();
      });
    });

    it('renders button to click a category', () => {
      const { getByText } = categoryListRender(categorysFixture);

      categorysFixture.forEach(({ name, id }) => {
        fireEvent.click(getByText(name));

        expect(handleSelectClick).toBeCalledWith(id);
      });
    });
  });

  context('without categorys', () => {
    const categorys = [];

    it('nothing render categorys', () => {
      const { container } = categoryListRender(categorys);

      expect(container).toBeEmptyDOMElement();
    });
  });
});
