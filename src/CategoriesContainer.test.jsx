import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories,
      selected: {
        category: {
          id: '',
          name: '',
        }
      }
    }))
  })
  

  it('renders category buttons', () => {
    const { queryByText } = render((<CategoriesContainer />))
    
    categories.forEach((category) => {
      expect(queryByText(category.name)).not.toBeNull();
    })
  })
  
  it('shows category button with (V)', () => {
    useSelector.mockImplementation((selector) => selector({
      categories,
      selected: {
        category: {
          id: '1',
          name: '한식',
        }
      },
    }))

    const { queryByText } = render((<CategoriesContainer />));
    
    expect(queryByText('한식(V)')).not.toBeNull();
  })

})
