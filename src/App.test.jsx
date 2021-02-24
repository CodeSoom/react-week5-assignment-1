import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [{ id: 1, name: '한식' }],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders regions', () => {
    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalledTimes(2);

    expect(queryByText('서울')).not.toBeNull();
  });

  it('renders categories', () => {
    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalledTimes(2);

    expect(queryByText('한식')).not.toBeNull();
  });
});
