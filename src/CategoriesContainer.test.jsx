import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
    categoryId: 0,
  }));

  useDispatch.mockImplementation(() => dispatch);

  context('when load complete', () => {
    it('calls set Categories dispatch', () => {
      const { getByText } = render(<CategoriesContainer />);

      expect(getByText('한식')).not.toBeNull();

      expect(dispatch).toBeCalled();
    });
  });

  context('click category', () => {
    it('calls check Categories dispatch', () => {
      const { getByText } = render(<CategoriesContainer />);

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalled();
    });
  });
});
