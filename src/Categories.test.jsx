import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Categories from './Categories';
import categories from './fixtures/categories';

describe('Categories', () => {
  it('show all categories', () => {
    const handleClick = jest.fn();

    const { getByText } = render(
      <Categories
        categories={categories}
        onClick={handleClick}
      />,
    );

    categories.forEach(({ name }) => {
      expect(getByText(`${name}`)).not.toBeNull();

      fireEvent.click(getByText(`${name}`));

      expect(handleClick).toBeCalled();
    });
  });
});
