import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';
import regions from '../../fixtures/regions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
    selected: {
      region: '서울',
    },
  }));

  render(<RegionsContainer />);

  expect(screen.getByRole('button', { name: '서울(V)' })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /대전/ })).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /서울/ }));

  expect(dispatch).toBeCalled();
});
