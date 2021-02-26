import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories,
  }))

  it('renders category buttons', () => {
    const { queryByText } = render((<CategoriesContainer />))
    
    categories.forEach((category) => {
      expect(queryByText(category.name)).not.toBeNull();
    })
  })
})
