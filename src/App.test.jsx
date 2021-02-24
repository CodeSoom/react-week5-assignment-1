import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

import regions from '../fixtures/regions';

jest.mock('react-redux');

describe('App', () => {

  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);

  useSelector.mockImplementation((selector) => selector({
    regions,
  }))

  it('renders category buttons', () => {
    const { getByText } = render(<App />)
    expect(dispatch).toBeCalled();
    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
  })
})
