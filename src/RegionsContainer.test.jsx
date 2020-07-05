import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { updateRegions, getRestaurants } from './actions';

import RegionsContainer from './RegionsContainer';

import regions from './__fixtures__/regions';

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

  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      regions,
    }));
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
    expect(updateRegions).toBeCalled();
    expect(getRestaurants).toBeCalled();
  });
});
