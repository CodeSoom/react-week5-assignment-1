import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import {
  regions, regionName,
} from '../fixture/test-data';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const renderRegionsContainer = () => render((
    <RegionsContainer />
  ));

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    regionName,
  }));

  const { getByText } = renderRegionsContainer();

  fireEvent.click(getByText(/대전/));

  expect(dispatch).toBeCalledTimes(2);
});
