import React from 'react';
import { render } from '@testing-library/react';

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
      searchQuery: {
        regionName: '',
        categoryId: 0,
      },
    }));
    const { container, getByText } = render(<CategoriesContainer />);
  });
});
