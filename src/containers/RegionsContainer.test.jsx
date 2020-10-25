import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';

import { regions } from '../../fixtures';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    region: {
      regions,
    },
  }));

  const { queryByText } = render(<RegionsContainer />);

  expect(queryByText(/서울/)).not.toBeNull();
  expect(queryByText(/대전/)).not.toBeNull();
  expect(queryByText(/대구/)).not.toBeNull();

  expect(queryByText(/서울(v)/)).toBeNull();

  fireEvent.click(queryByText(/서울/));

  expect(dispatch).toBeCalledWith({
    type: 'updateSelectedRegionName',
    payload: {
      regionName: '서울',
    },
  });
});
