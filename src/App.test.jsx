import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }))

  it('renders category buttons', () => {
    const { queryByText } = render(<App />)
    expect(dispatch).toBeCalledTimes(2);
    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('중식')).not.toBeNull();
    expect(queryByText('일식')).not.toBeNull();
    expect(queryByText('양식')).not.toBeNull();
    expect(queryByText('분식')).not.toBeNull();
  })
})
