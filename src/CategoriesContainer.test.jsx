import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { updateCategories, getRestaurants } from './actions';

import CategoriesContainer from './CategoriesContainer';

import categoriesFixture from './__fixtures__/categories';

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
    categories: categoriesFixture,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders category buttons', () => {
    // when
    const { getButtonByName } = renderCategoriesContainer();
    // then
    categoriesFixture.forEach(({ name }) => {
      expect(getButtonByName(name)).toBeInTheDocument();
    });
  });

  it('click category button', () => {
    // given
    const updateCategoriesAction = jest.fn();
    const getRestaurantsAction = jest.fn();
    updateCategories.mockImplementation(() => updateCategoriesAction);
    getRestaurants.mockImplementation(() => getRestaurantsAction);
    const category = categoriesFixture[0];
    // when
    const { getButtonByName } = renderCategoriesContainer();
    fireEvent.click(getButtonByName(category.name));
    // then
    expect(dispatch).toBeCalledWith(updateCategoriesAction);
    expect(dispatch).toBeCalledWith(getRestaurantsAction);
    expect(updateCategories).toBeCalledWith(category.id);
  });
});
