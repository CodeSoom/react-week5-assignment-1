import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render, fireEvent } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

import { categories } from '../fixtures/categories';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  it('카테고리 리스트가 나타난다.', () => {
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));

    const { getByText } = render(<CategoriesContainer />);

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
  });

  it('카테고리을 클릭할 수 있다.', () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories,
    }));

    const { getByText } = render(<CategoriesContainer />);

    fireEvent.click(getByText('한식'));

    expect(dispatch).toBeCalled();
  });
});
