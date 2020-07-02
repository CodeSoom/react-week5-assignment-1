import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

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

      useSelector.mockImplementation((selector) => selector({
        regions: testRegions,
        categories: testCategories,
      }));

      const { getByText } = render((
        <App />
      ));

      expect(getByText(testRegions[0].name)).toBeInTheDocument();
      expect(getByText(testCategories[0].name)).toBeInTheDocument();
    });
  });
});
