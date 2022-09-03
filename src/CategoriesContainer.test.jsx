import { render } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import categories from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders categories', () => {
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));

    const { getAllByRole } = render((
      <CategoriesContainer />
    ));

    categories.forEach((category, index) => {
      expect(getAllByRole('button')[index].textContent).toBe(category.name);
    });
  });
});
