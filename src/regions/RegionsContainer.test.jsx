import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../../fixtures/regions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
    query: {
      regionName: '부산',
    },
  }));

  const { queryByText } = render(<RegionsContainer />);

  expect(queryByText(/서울/)).not.toBeNull();

  expect(queryByText(/부산\(V\)/)).not.toBeNull();

  fireEvent.click(queryByText(/서울/));

  expect(dispatch).toBeCalledWith({
    type: 'selectRegion',
    payload: {
      regionName: '서울',
    },
  });
});
