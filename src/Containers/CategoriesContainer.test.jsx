import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('카테고리 리스트가 보인다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories: [
        {
          id: 1,
          name: '한식',
        },
      ],
    }));
    const { container } = render(<CategoriesContainer />);
    expect(container).toHaveTextContent('한식');
  });
  it('한식을 클릭하면 categoryId가 변경된다.', () => {
    const dispatch = jest.fn();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector({
      categories: [
        {
          id: 1,
          name: '한식',
        },
      ],
    }));
    const { getByText } = render(<CategoriesContainer />);
  });
});
