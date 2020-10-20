import React from 'react';

import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { categoriesFixture, regionsFixture } from '../fixtures/fixtures';
import ListContainer from './ListContainer';

jest.mock('react-redux');

describe('ListContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: categoriesFixture,
    regions: regionsFixture,
  }));

  const listContainerRender = () => render((
    <ListContainer />
  ));

  const calledDispatch = ({ type, info }) => {
    expect(dispatch).toBeCalledWith({
      type: 'loadRestaurantInfo',
      payload: {
        type,
        info,
      },
    });
  };

  it('renders setting initial list', () => {
    const { getByText } = listContainerRender();

    calledDispatch({ type: 'regions', info: regionsFixture });

    regionsFixture.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });

    calledDispatch({ type: 'categories', info: categoriesFixture });

    categoriesFixture.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });
  });
});
