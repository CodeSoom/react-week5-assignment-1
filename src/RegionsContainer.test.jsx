import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { updateRegions, getRestaurants } from './actions';

import regionsFixture from './__fixtures__/regions';

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
    regions: regionsFixture,
  }));

  beforeEach(() => {
    dispatch.mockClear();
  });

  it('renders region buttons', () => {
    // when
    const { getButtonByName } = renderRegionsContainer();
    // then
    regionsFixture.forEach(({ name }) => {
      expect(getButtonByName(name)).toBeInTheDocument();
    });
  });

  it('click region button', () => {
    // given
    const updateRegionsAction = jest.fn();
    const getRestaurantsAction = jest.fn();
    updateRegions.mockImplementation(() => updateRegionsAction);
    getRestaurants.mockImplementation(() => getRestaurantsAction);
    const region = regionsFixture[0];
    // when
    const { getButtonByName } = renderRegionsContainer();
    fireEvent.click(getButtonByName(region.name));
    // then
    expect(dispatch).toBeCalledWith(updateRegionsAction);
    expect(dispatch).toBeCalledWith(getRestaurantsAction);
    expect(updateRegions).toBeCalledWith(region.id);
  });
});
