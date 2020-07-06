import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import App from './App';

jest.mock('react-redux');
jest.mock('./services/category');

function renderComponent() {
  return render(<App />);
}

describe('<App />', () => {
  const dispatch = jest.fn();

  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories: [],
      restaurants: [],
    }));
  });

  it('display app name', () => {
    const { getByText } = renderComponent();
    expect(getByText('Restaurants')).not.toBe(null);
  });
});
