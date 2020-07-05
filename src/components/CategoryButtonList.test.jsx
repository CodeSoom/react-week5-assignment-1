import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import CATEGORIES from '../__fixtures__/categories.json';
import CategoryButtonList from './CategoryButtonList';

describe('<CategoryButtonList />', () => {
  const handleClickCategory = jest.fn();

  const renderComponent = (categories) => render((
    <CategoryButtonList
      categories={categories}
      handleClickCategory={handleClickCategory}
    />
  ));

  context('without categories', () => {
    it('display no category-buttons', () => {
      const { container } = renderComponent([]);
      const categoryButtons = container.querySelector('#category-button-list').children;
      expect(categoryButtons.length).toEqual(0);
    });
  });

  context('with categories', () => {
    it('display category-buttons', () => {
      const { container } = renderComponent(CATEGORIES);
      const categoryButtons = container.querySelector('#category-button-list').children;
      expect(categoryButtons.length).toEqual(CATEGORIES.length);
    });

    context('when click category-button', () => {
      it('fired click event', () => {
        const { getAllByRole } = renderComponent(CATEGORIES);
        // When
        const categoryButtons = getAllByRole('button');
        categoryButtons.forEach((button) => fireEvent.click(button));
        // Then
        expect(handleClickCategory).toBeCalledTimes(CATEGORIES.length);
      });
    });
  });
});
