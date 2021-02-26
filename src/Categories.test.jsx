import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

import categories from '../fixtures/categories';

describe('Categories', () => {
  const handleClick = jest.fn();

  const renderCategories = () => render((
    <Categories 
      categories={categories} 
      onClickCheck={handleClick} 
    />
  ))

  it('renders categories', () => {
    const { queryByText } = renderCategories();

    categories.forEach((category) => {
      expect(queryByText(category.name)).not.toBeNull();
    })
  })

  it('clicks category buttons', () => {
    const { queryByText } = renderCategories();

    categories.forEach((category) => {
      fireEvent.click(queryByText(category.name));
    })  

    expect(handleClick).toBeCalledTimes(categories.length);
  })  
})
