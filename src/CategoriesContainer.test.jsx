import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import given from 'given2';

import { categories } from '../fixtures';

import { setSelected } from './actions';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  given('selected', () => ({
    category: '',
  }));

  const dispatch = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    useSelector.mockImplementation((selector) => selector({
      categories,
      selected: given.selected,
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
    given('selected', () => ({
      category: {
        id: 1,
        name: '한식',
      },
    }));

    const { queryByText } = render(<CategoriesContainer />);

    expect(queryByText('한식(V)')).not.toBeNull();
  });

  it('appends a new category into selected category upon clicking category button', () => {
    const { queryByText } = render(<CategoriesContainer />);

    fireEvent.click(queryByText('한식'));

    expect(dispatch).toBeCalledWith(setSelected({
      category: {
        id: '1',
        name: '한식',
      },
    }));
  });

  it("doesn't append a new category into selected category", () => {
    given('selected', () => ({
      category: {
        id: 1,
        name: '한식',
      },
    }));

    const { queryByText } = render(<CategoriesContainer />);

    fireEvent.click(queryByText('한식(V)'));

    expect(dispatch).not.toBeCalled();
  });
});
