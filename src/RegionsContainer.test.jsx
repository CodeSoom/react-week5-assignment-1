import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';
import { selectRegion } from './actions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  const { getByText } = render((
    <RegionsContainer />
  ));

  expect(getByText('서울')).not.toBeNull();

  fireEvent.click(getByText('서울'));

  expect(dispatch).toBeCalledWith(selectRegion('서울'));
});
