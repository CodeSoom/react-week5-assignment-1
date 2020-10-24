import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';

import Categories from './Categories';
import categoriesFixture from '../../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  it('render', () => {
    render(
      <Categories
        categories={categoriesFixture}
        selected="한식"
      />,
    );

    expect(screen.getByText('한식(V)')).toBeInTheDocument();
  });

  it('click test', () => {
    render(
      <Categories
        categories={categoriesFixture}
        onClick={handleClick}
      />,
    );

    expect(handleClick).not.toBeCalled();

    fireEvent.click(screen.getByRole('button', { name: /한식/ }));

    expect(handleClick).toBeCalled();
  });
});
