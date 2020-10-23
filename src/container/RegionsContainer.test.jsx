import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';
import regions from '../../fixtures/regions';

jest.mock('react-redux');

test('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  render(<RegionsContainer />);

  expect(screen.getByRole('button', { name: /서울/ })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /대전/ })).toBeInTheDocument();
});
