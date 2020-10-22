import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

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

  fireEvent.click(getByText(/서울/));

  expect(dispatch).toBeCalledWith({
    type: 'updateRegion',
    payload: {
      region: '서울',
    },
  });

  expect(getByText(/서울/)).not.toBeNull();
  expect(getByText(/대전/)).not.toBeNull();
});
