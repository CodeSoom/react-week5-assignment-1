import React from 'react';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import regionsFixture from './__fixtures__/regions';

import RegionButtonListContainer from './RegionButtonListContainer';

jest.mock('react-redux');

function renderRegionButtonListContainer() {
  render(<RegionButtonListContainer />);
  return {
    getButtonByName: (name) => screen.getByRole('button', { name }),
  };
}

describe('<RegionButtonListContainer />', () => {
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
    const { getButtonByName } = renderRegionButtonListContainer();
    // then
    expect(getButtonByName('서울')).toBeInTheDocument();
    expect(getButtonByName('대전')).toBeInTheDocument();
  });

  it('check when button clicked', () => {
    // when
    const { getButtonByName } = renderRegionButtonListContainer();
    fireEvent.click(getButtonByName('서울'));
    // then
    expect(dispatch).toBeCalledTimes(3);
  });

  it('uncheck when another button clicked', () => {
    // when
    const { getButtonByName } = renderRegionButtonListContainer();
    fireEvent.click(getButtonByName('서울'));
    fireEvent.click(getButtonByName('부산'));
    // then
    expect(dispatch).toBeCalledTimes(5);
  });
});
