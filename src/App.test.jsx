import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/api');

describe('App', () => {
  it('should display regions', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
    }));

    const { queryByText } = render((
      <App />
    ));

    expect(queryByText('서울')).toBeNull();
  });
});
