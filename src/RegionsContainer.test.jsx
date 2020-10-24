import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RegionsContainer from './RegionsContainer';

jest.mock('react-redux');

describe('RegionsContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockImplementation(() => dispatch);
  });

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
      { id: 2, name: '대전' },
      { id: 3, name: '대구' },
    ],
  }));

  describe('selects a region', () => {
    it('checks selected region', () => {
      const { getByText } = render(<RegionsContainer />);

      fireEvent.click(getByText('서울'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
