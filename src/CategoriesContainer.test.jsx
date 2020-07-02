import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../__fixture__/data';

jest.mock('react-redux');

describe('<CategoriesContainer />', () => {
  describe('render CategoriesContainer', () => {
    it('shows categories', () => {
      useSelector.mockImplementation((selector) => selector({
        categories,
        selectedCategory: '',
      }));

      const { queryByRole } = render(<CategoriesContainer />);

      categories.forEach((category) => {
        expect(queryByRole('button', { name: category.name })).not.toBeNull();
      });
    });
  });

  // context('when the user selects category', () => {
  //   it('run selectCategory action', () => {});
  // });
});
