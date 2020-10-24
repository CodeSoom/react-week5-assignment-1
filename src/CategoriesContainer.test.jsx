import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { categoriesInfo } from '../fixtures/fixtures';
import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('CategoriesContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      category: null,
      categories: categoriesInfo,
    }));
  });

  const categoriesContainerRender = () => render((
    <CategoriesContainer />
  ));

  it('renders setting initial categories', () => {
    const { getByText } = categoriesContainerRender();

    categoriesInfo.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });

    expect(dispatch).toBeCalledTimes(1);
  });

  it('click category render button text status', () => {
    const { getByText } = categoriesContainerRender();

    const categoryButton = getByText(/한식/);
    expect(categoryButton).not.toBeNull();

    fireEvent.click(categoryButton);

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurant',
      payload: {
        type: 'category',
        id: 1,
      },
    });
  });
});
