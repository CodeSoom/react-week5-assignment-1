import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  context('with regions and categories', () => {
    it('renders regions and categories', () => {
      const testRegions = [
        { id: 1, name: '서울' }, { id: 2, name: '대전' },
      ];

      const testCategories = [
        { id: 1, name: '한식' }, { id: 2, name: '중식' },
      ];

      const dispatch = jest.fn();
      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        regions: testRegions,
        categories: testCategories,
        restaurants: [],
      }));

      const { getByText } = render((
        <App />
      ));

      expect(getByText(testRegions[0].name)).toBeInTheDocument();
      expect(getByText(testCategories[0].name)).toBeInTheDocument();
    });
  });
});
