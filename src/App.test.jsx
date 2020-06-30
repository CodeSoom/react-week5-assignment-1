import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');

describe('App', () => {
  it('should display regions', () => {
    useSelector.mockImplementation((selector) => selector({
      regions: [],
    }));

    const { getByText } = render((
      <App />
    ));

    expect(getByText('서울')).not.toBeNull();
  });
});
