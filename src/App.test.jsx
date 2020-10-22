import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');

describe('App', () => {
  const dispatch = jest.fn();

  useSelector.mockImplementation((selector) => selector({
    categories: [
      { id: 1, name: '한식' },
    ],
    regions: [
      { id: 1, name: '서울' },
    ],
    restaurants: [],
  }));

  useDispatch.mockImplementation(() => dispatch);

  it('show all categories', () => {
    const { getByText } = render(<App />);

    expect(getByText('한식')).not.toBeNull();
  });

  it('show all regions', () => {
    const { getByText } = render(<App />);

    expect(getByText('서울')).not.toBeNull();
  });
});
