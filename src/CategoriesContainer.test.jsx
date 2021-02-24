import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    useDispatch.mockImplementationOnce(() => dispatch);
  });

  it('should get categories when mounted', () => {
    render(<CategoriesContainer />);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
