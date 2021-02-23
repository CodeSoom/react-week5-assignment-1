import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  const dispatch = jest.fn();

  beforeEach(() => { jest.clearAllMocks(); });

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) => selector({
    regions: [],
    categories: [],
    selectedRegionID: 0,
    selectedCategoryID: 0,
  }));

  it('App 시작시 초기값들을 가져온다.', () => {
    render(<App />);
    expect(dispatch).toBeCalledTimes(2);
  });
});
