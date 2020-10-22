import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],
  }));

  useDispatch.mockImplementation(() => dispatch);

  context('when load complete', () => {
    it('calls set regions dispatch', () => {
      const { getByText } = render(<RegionsContainer />);

      expect(getByText('서울')).not.toBeNull();

      expect(dispatch).toBeCalled();
    });
  });
});
