import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  context('without data', () => {
    it('returns just empty data', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        region: null,
        regions: [],
        category: null,
        categories: [],
        restaurants: [],
      }));

      const { queryByText } = render(<App />);

      expect(dispatch).toBeCalledTimes(2);
      expect(queryByText('서울')).toBeNull();
    });
  });

  context('with data', () => {
    it('returns data', () => {
      const dispatch = jest.fn();

      useDispatch.mockImplementation(() => dispatch);

      useSelector.mockImplementation((selector) => selector({
        region: null,
        regions: [],
        category: null,
        categories: [],
        restaurants: [{
          id: 1,
          name: '우앙',
        }],
      }));

      const { queryByText } = render(<App />);

      expect(dispatch).toBeCalledTimes(2);
      expect(queryByText('서울')).toBeNull();
    });
  });
});
