import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import { categories } from './fixtures/mockData';
import { watchCategory } from './actions';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockImplementationOnce((selector) => selector({ categories }));
    useDispatch.mockImplementationOnce(() => dispatch);
  });

  it('should get categories when mounted', () => {
    render(<CategoriesContainer />);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('should render categories', () => {
    const { getByRole } = render(<CategoriesContainer />);

    categories.forEach((category) => {
      expect(getByRole('list')).toHaveTextContent(category.name);
    });
  });

  it('should change category when clicked', () => {
    const { getByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));
    expect(dispatch).toHaveBeenCalledWith(watchCategory(1));
  });
});
