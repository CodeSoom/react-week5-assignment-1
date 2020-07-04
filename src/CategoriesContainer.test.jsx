import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('RegionContainer', () => {
  it('should display categories', () => {
    useSelector.mockImplementation((selector) => selector({
      categories: [
        { id: 101, name: '중식' },
      ],
    }));

    const { getByText } = render((
      <CategoriesContainer />
    ));

    expect(getByText('중식')).not.toBeNull();
  });

  it('should display selected category', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    const { getByText } = render((
      <CategoriesContainer />
    ));

    fireEvent.click(getByText('중식'));

    expect(dispatch).toBeCalledWith({
      type: 'selectCategory',
      payload: {
        selectedCategory: '중식',
      },
    });
  });
});
