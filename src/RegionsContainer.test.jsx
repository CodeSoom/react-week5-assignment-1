import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import { selectRegion } from './actions';

import { regions } from '../fixture/test-data';

jest.mock('react-redux');

test('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({ regions }));

  const { getByText } = render((
    <RegionsContainer />
  ));

  fireEvent.click(getByText(regions[0].name));

  expect(dispatch).toBeCalledWith(selectRegion(regions[0].name));
});
