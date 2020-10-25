import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../__fixtures__/categories';

describe('Categories Component', () => {
  const handleClick = jest.fn();

  it('Page render without selected', () => {
    const selected = '';

    const { container } = render((
      <Categories
        categories={categories}
        selected={selected}
        onClick={handleClick}
      />
    ));

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('Page render with selected', () => {
    const selected = '한식';

    const { getByText } = render((
      <Categories
        categories={categories}
        selected={selected}
        onClick={handleClick}
      />
    ));

    expect(getByText('한식 (V)')).not.toBeNull();
  });

  it('Click category', () => {
    const selected = '';

    const { container, getByText } = render((
      <Categories
        categories={categories}
        selected={selected}
        onClick={handleClick}
      />
    ));

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
      fireEvent.click(getByText(name));
    });

    expect(handleClick).toBeCalledTimes(categories.length);
  });
});
