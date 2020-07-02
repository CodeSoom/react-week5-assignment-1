import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import { categories } from '../__fixture__/data';

jest.mock('react-redux');

describe('<Categories />', () => {
  describe('render Categories', () => {
    context('without selectedCategory', () => {
      it('shows categories', () => {
        const { queryByRole } = render(<Categories
          categories={categories}
          selectedCategory=""
        />);

        categories.forEach((category) => {
          expect(queryByRole('button', { name: category.name })).not.toBeNull();
        });
      });
    });
    context('with selectedCategory', () => {
      it('shows a category with a selection mark', () => {
        const { queryByRole } = render(<Categories
          categories={categories}
          selectedCategory="한식"
        />);

        expect(queryByRole('button', { name: '한식(V)' })).not.toBeNull();
      });
    });
  });

  context('when the user selects category', () => {
    it('run selectCategory action', () => {
      const handleSelectCategory = jest.fn();

      const { getByRole } = render(
        <Categories
          categories={categories}
          selectedCategory=""
          onSelectCategory={handleSelectCategory}
        />,
      );

      categories.forEach((category) => {
        fireEvent.click(getByRole('button', { name: category.name }));
        expect(handleSelectCategory).toBeCalledTimes(categories.length);
      });
    });
  });
});
