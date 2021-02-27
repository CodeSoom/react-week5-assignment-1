import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  it('show all categories', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 1, name: '한식' },
      ],
      regions:[],
      selectedCatId: 0,
    }));

    const { getByText } = render((
      <CategoriesContainer />
    ));

    expect(getByText('한식')).not.toBeNull();
  });
  describe('if click unselected category', () => {
    it('append (v) after category name', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);
      useSelector.mockImplementation((selector) => selector({
        categories: [
          { id: 1, name: '한식' },
          { id: 2, name: '일식' },
        ],
        regions:[],
        selectedCatId: 0,
      }));

      const { getByText } = render((
        <CategoriesContainer />
      ));
      fireEvent.click(getByText('일식'));

      expect(dispatch).toBeCalledWith({
        type: 'setSelectedCatId',
        payload: {
          id: 2,
        },
      });
    });
  });
});
