import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import { categories } from './fixtures/mockData';
import { selectCategory } from './actions';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockImplementationOnce((selector) => selector({ categories }));
    useDispatch.mockImplementationOnce(() => dispatch);
  });

  it('gets categories when mounted', () => {
    render(<CategoriesContainer />);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it('renders categories', () => {
    const { getByRole } = render(<CategoriesContainer />);

    categories.forEach((category) => {
      expect(getByRole('list')).toHaveTextContent(category.name);
    });
  });

  it('changes category when clicked', () => {
    const { getByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));
    expect(dispatch).toHaveBeenCalledWith(selectCategory(1));
  });
});
