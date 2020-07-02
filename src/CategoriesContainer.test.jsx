import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  useDispatch.mockImplementation(() => dispatch);

  const testCategories = [
    { id: 1, name: '한식' }, { id: 2, name: '중식' },
  ];

  context('with a categories', () => {
    it('select categories', () => {
      useSelector.mockImplementation((selector) => selector({
        categories: testCategories,
      }));

      const { getByText } = render((
        <CategoriesContainer />
      ));

      expect(getByText(testCategories[0].name)).toBeInTheDocument();
    });
  });
});
