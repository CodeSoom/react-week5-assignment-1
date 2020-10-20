import React from 'react';

import { render } from '@testing-library/react';
import Categories from './Categories';

describe('Categories', () => {
  it('show all categories', () => {
    const handleClick = jest.fn();
    const categories = [
      { id: 1, category: '한식' },
      { id: 2, category: '중식' },
      { id: 3, category: '일식' },
      { id: 4, category: '양식' },
      { id: 5, category: '분식' },
    ];

    const { getByText } = render(<Categories categories={categories} onClick={handleClick} />);

    categories.forEach(({ category }) => {
      expect(getByText(`${category}`)).not.toBeNull();
    });
  });
});
