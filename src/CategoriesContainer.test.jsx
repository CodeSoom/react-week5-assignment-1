import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fireEvent, render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, category: '한식', isChecked: false },
      { id: 2, category: '중식', isChecked: false },
    ],
  }));

  it('show categories', () => {
    const { getByText } = render(<CategoriesContainer />);

    expect(getByText('한식')).not.toBeNull();
  });

  context('click category', () => {
    it('calls check dispatch', () => {
      const { getByText } = render(<CategoriesContainer />);

      const categories = [
        { id: 1, category: '한식', isChecked: false },
      ];

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalledWith(
        {
          type: 'checkCategories',
          payload: { id: categories[0].id, isChecked: categories[0].isChecked },
        },
      );
    });

    it('initialize previously checked category', () => {
      const { getByText } = render(<CategoriesContainer />);

      const categories = [
        { id: 1, category: '한식', isChecked: false },
        { id: 2, category: '중식', isChecked: false },
      ];

      fireEvent.click(getByText('한식'));

      expect(dispatch).toBeCalledWith(
        {
          type: 'checkCategories',
          payload: { id: categories[0].id, isChecked: categories[0].isChecked },
        },
      );

      fireEvent.click(getByText('중식'));

      expect(dispatch).toBeCalledWith(
        {
          type: 'checkCategories',
          payload: { id: categories[1].id, isChecked: categories[1].isChecked },
        },
      );

      expect(dispatch).toBeCalledWith(
        {
          type: 'initializeCheckedItem',
          payload: { id: categories[1].id },
        },
      );
    });
  });
});
