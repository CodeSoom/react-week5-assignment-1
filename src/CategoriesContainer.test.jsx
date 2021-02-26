import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { categories } from '../fixtures';

import { setClicked } from './actions';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  given('clicked', () => ({
    category: '',
  }));

  const dispatch = jest.fn();

  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      categories,
      clicked: given.clicked,
    }));

    useDispatch.mockImplementation(() => dispatch);
  });

  it('renders categories buttons', () => {
    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText('한식')).not.toBeNull();
    expect(queryByText('중식')).not.toBeNull();
    expect(queryByText('일식')).not.toBeNull();
  });

  it('renders (V) along the selected button', () => {
    given('clicked', () => ({
      category: {
        id: 1,
        name: '한식',
      },
    }));

    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText('한식(V)')).not.toBeNull();
  });

  it('appends a new category into Clicked upon clicking region', () => {
    const { queryByText } = render(<CategoriesContainer />);

    fireEvent.click(queryByText('한식'));

    expect(dispatch).toBeCalledWith(setClicked({
      category: {
        id: '1',
        name: '한식',
      },
    }));
  });
});
