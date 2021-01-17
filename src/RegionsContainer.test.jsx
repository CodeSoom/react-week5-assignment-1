import React from 'react';

import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { regionsInfo } from '../fixtures/fixtures';
import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RegionsContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      region: null,
      regions: regionsInfo,
    }));
  });

  const regionsContainerRender = () => render((
    <RegionsContainer />
  ));

  it('renders setting initial regions', () => {
    const { getByText } = regionsContainerRender();

    regionsInfo.forEach(({ name }) => {
      expect(getByText(name)).not.toBeNull();
    });

    expect(dispatch).toBeCalledTimes(1);
  });

  it('click region render button text status', () => {
    const { getByText } = regionsContainerRender();

    const regionButton = getByText(/서울/);
    expect(regionButton).not.toBeNull();

    fireEvent.click(regionButton);

    expect(dispatch).toBeCalledWith({
      type: 'updateRestaurant',
      payload: {
        type: 'region',
        id: '서울',
      },
    });
  });
});
