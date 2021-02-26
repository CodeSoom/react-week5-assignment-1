import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  const { queryByText } = render((
    <Categories categories={categories} onClick={handleClick} />
  ))

  it('renders categories', () => {
    categories.forEach((category) => {
      expect(queryByText(category.name)).not.toBeNull();
    })
  })

  it('clicks categories', () => {
    categories.forEach((category) => {
      expect(handleClick).not.toBeCalledWith(category.id);
      fireEvent.click(queryByText(category.id));
      expect(handleClick).toBeCalledWith(category.id);
    })
  })  
})
