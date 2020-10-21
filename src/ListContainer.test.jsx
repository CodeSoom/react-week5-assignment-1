import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { categoriesFixture, regionsFixture } from '../fixtures/fixtures';
import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      region: null,
      category: null,
      categories: categoriesFixture,
      regions: regionsFixture,
    }));
  });

  const listContainerRender = () => render((
    <ListContainer />
  ));

  const loadRestaurantDispatch = ({ type, info }) => {
    expect(dispatch).toBeCalledWith({
      type: 'loadRestaurantInfo',
      payload: {
        type,
        info,
      },
    });
  };

  const updateRestaurantDispatch = (payload) => {
    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurant',
      payload,
    });
  };

  it('renders setting initial list', () => {
    const { getByText } = listContainerRender();

    loadRestaurantDispatch({ type: 'regions', info: regionsFixture });

    regionsFixture.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });

    loadRestaurantDispatch({ type: 'categories', info: categoriesFixture });

    categoriesFixture.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });

  it('click region and category render button text status', () => {
    const { getByText } = listContainerRender();

    const regionButton = getByText(/서울/);
    expect(regionButton).not.toBeNull();

    fireEvent.click(regionButton);

    updateRestaurantDispatch({ type: 'region', id: 1 });

    const categoryButton = getByText(/한식/);
    expect(categoryButton).not.toBeNull();

    fireEvent.click(categoryButton);

    updateRestaurantDispatch({ type: 'category', id: 1 });
  });
});
