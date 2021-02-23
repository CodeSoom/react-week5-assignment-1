import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders regions', () => {
    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalled();

    expect(queryByText('서울')).not.toBeNull();
  });
});
