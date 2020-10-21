import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import categories from '../__fixtures__/categories';

import Categories from './Categories';

describe('Categories', () => {
  const handleClickCategory = jest.fn();

  describe('render buttons', () => {
    it('show button text', () => {
      const selectedCategory = 2;
      const { container } = render((
        <Categories
          categories={categories}
          selectedCategory={selectedCategory}
          onClick={handleClickCategory}
        />
      ));

      categories.forEach(({ id, name }) => {
        const buttonText = selectedCategory === id
          ? `${name}(v)`
          : name;
        expect(container).toHaveTextContent(buttonText);
      });
    });

    context('when the button clicked', () => {
      it('run onClick function', () => {
        const selectedCategory = '';

        const { container, getByText } = render((
          <Categories
            categories={categories}
            selectedCategory={selectedCategory}
            onClick={handleClickCategory}
          />
        ));

        categories.forEach(({ name }) => {
          expect(container).toHaveTextContent(name);

          fireEvent.click(getByText(name));
        });

        expect(handleClickCategory).toBeCalledTimes(categories.length);
      });
    });
  });
});
