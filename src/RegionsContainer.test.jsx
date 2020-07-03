import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { updateRegions, getRestaurants } from './actions';

import regions from './__fixtures__/regions';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('./actions');

function renderRegionsContainer() {
  render(<RegionsContainer />);
  return {
    getButtonByName: (name) => screen.getByRole('button', { name }),
  };
}

describe('<RegionsContainer />', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const updateRegionsAction = jest.fn();
  updateRegions.mockImplementation(() => updateRegionsAction);
  const getRestaurantsAction = jest.fn();
  getRestaurants.mockImplementation(() => getRestaurantsAction);

  beforeEach(() => {
    dispatch.mockClear();
    updateRegionsAction.mockClear();
    getRestaurantsAction.mockClear();
  });

  it('renders region buttons', () => {
    // when
    const { getButtonByName } = renderRegionsContainer();
    // then
    regions.forEach(({ name }) => {
      expect(getButtonByName(name)).toBeInTheDocument();
    });
  });

  it('click region button', () => {
    // when
    const { getButtonByName } = renderRegionsContainer();
    fireEvent.click(getButtonByName(regions[0].name));
    // then
    expect(dispatch).toBeCalledWith(updateRegionsAction);
    expect(dispatch).toBeCalledWith(getRestaurantsAction);
    expect(updateRegions).toBeCalledWith(regions[0].id);
  });
});
