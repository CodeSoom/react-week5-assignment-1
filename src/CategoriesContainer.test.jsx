import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../fixtures/restaurants';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));
  });

  it('button들을 보여준다.', () => {
    const { queryByText } = render(<CategoriesContainer />);

    categories.forEach((category) => {
      const { name } = category;

      expect(queryByText(name)).not.toBeNull();
    });
  });
});
