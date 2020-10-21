import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeAll(() => {
    jest.clearAllMocks();
  });

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions: [
      { id: 1, name: '서울' },
    ],

    categories: [
      { id: 1, name: '한식' },
    ],
  }));

  context('RegionsContainer', () => {
    it('checks region', () => {
      const { getByText } = render(<App />);

      expect(getByText('서울')).not.toBeNull();
    });
  });

  context('Categories', () => {
    it('checks categories', () => {
      const { getByText } = render(<App />);

      expect(getByText('한식')).not.toBeNull();
    });
  });
});
