import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { updateCategories, getRestaurants } from './actions';

import CategoriesContainer from './CategoriesContainer';

import categories from './__fixtures__/categories';

jest.mock('react-redux');
jest.mock('./actions');

function renderCategoriesContainer() {
  render(<CategoriesContainer />);
  return {
    getButtonByName: (name) => screen.getByRole('button', { name }),
  };
}

describe('<CategoriesContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    categories,
  }));

  const updateCategoriesAction = jest.fn();
  updateCategories.mockImplementation(() => updateCategoriesAction);
  const getRestaurantsAction = jest.fn();
  getRestaurants.mockImplementation(() => getRestaurantsAction);

  beforeEach(() => {
    dispatch.mockClear();
    updateCategoriesAction.mockClear();
    getRestaurantsAction.mockClear();
  });

  it('renders category buttons', () => {
    // when
    const { getButtonByName } = renderCategoriesContainer();
    // then
    categories.forEach(({ name }) => {
      expect(getButtonByName(name)).toBeInTheDocument();
    });
  });

  it('click category button', () => {
    // when
    const { getButtonByName } = renderCategoriesContainer();
    fireEvent.click(getButtonByName(categories[0].name));
    // then
    expect(dispatch).toBeCalledWith(updateCategoriesAction);
    expect(dispatch).toBeCalledWith(getRestaurantsAction);
    expect(updateCategories).toBeCalledWith(categories[0].id);
  });
});
