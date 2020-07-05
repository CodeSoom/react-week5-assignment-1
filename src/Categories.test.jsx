import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  context('with category data', () => {
    const categories = [
      { id: 1, name: '한식' }, { id: 2, name: '중식' },
    ];

    it('can be clicked', () => {
      const handleClick = jest.fn();

      const { getByText } = render((
        <Categories
          categories={categories}
          onClick={handleClick}
        />
      ));

      fireEvent.click(getByText('한식'));

      expect(handleClick).toBeCalledTimes(1);
    });

    it('renders categories', () => {
      const { container } = render((
        <Categories
          categories={categories}
        />
      ));
      expect(container).toHaveTextContent('한식');
      expect(container).toHaveTextContent('중식');
    });

    context('with clicked category', () => {
      it('renders V mark next to clicked category name', () => {
        const clickedCategoryId = 2;

        const { container } = render((
          <Categories
            clickedCategoryId={clickedCategoryId}
            Categories={Categories}
          />
        ));

        expect(container).toHaveTextContent('한식');
        expect(container).toHaveTextContent('중식(V)');
      });
    });
  });
});
