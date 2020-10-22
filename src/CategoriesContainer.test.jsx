import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import categories from './fixtures/categories';

jest.mock('react-redux');
jest.mock('./services/api');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));

    useDispatch.mockImplementation(() => dispatch);

    jest.clearAllMocks();
  });

  context('when load complete', () => {
    it('calls set categories dispatch', () => {
      const { getByText } = render(<CategoriesContainer />);

      categories.forEach(({ name }) => {
        expect(getByText(`${name}`)).not.toBeNull();
      });

      expect(dispatch).toBeCalledTimes(1);
    });
  });

  context('when click category', () => {
    it('calls select category dispatch', () => {
      const { getByText } = render(<CategoriesContainer />);

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalledTimes(2);
    });
  });
});
