import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render } from '@testing-library/react';

import RegionsContainer from './RegionsContainer';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions,
  }));

  context('load regions', () => {
    it('render regions list', () => {
      const { getByText } = render(<RegionsContainer />);

      expect(getByText(/서울/)).not.toBeNull();
    });
  });
});
