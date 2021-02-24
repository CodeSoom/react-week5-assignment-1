import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { render } from '@testing-library/react';

import App from './App';
import { loadCategories, loadRegions } from './actions';

jest.mock('react-redux');
jest.mock('./services/api');
jest.mock('./actions');

describe('App', () => {
  const dispatch = jest.fn();
  const asyncFunction = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();

    useSelector.mockImplementation((selector) => selector({
      regions: [{ id: 1, name: '서울' }],
      categories: [{ id: 1, name: '한식' }],
    }));

    loadRegions.mockImplementation(() => asyncFunction);
    loadCategories.mockImplementation(() => asyncFunction);

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders regions and categories and restaurant', () => {
    const { queryByText } = render(<App />);

    expect(dispatch).toBeCalledTimes(2);
    expect(dispatch).toHaveBeenNthCalledWith(1, loadRegions());
    expect(dispatch).toHaveBeenNthCalledWith(2, loadCategories());

    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('양천주가')).not.toBeNull();
  });
});
