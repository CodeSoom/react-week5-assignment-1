import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Categories from './Categories';

describe('Categories', () => {
  const categories = [
    { id: 1, name: '한식' },
    { id: 2, name: '중식' },
    { id: 3, name: '일식' },
    { id: 4, name: '양식' },
    { id: 5, name: '분식' },
  ];

  const handleClick = jest.fn();

  it('카테고리가 보인다.', () => {
    const { getByText } = render(
      <Categories
        categories={categories}
      />,
    );

    expect(getByText('한식')).not.toBeNull();
    expect(getByText('중식')).not.toBeNull();
    expect(getByText('일식')).not.toBeNull();
    expect(getByText('양식')).not.toBeNull();
    expect(getByText('분식')).not.toBeNull();
  });

  it('버튼을 클릭하면 선택된다.', () => {
    const { getByText } = render(
      <Categories
        categories={categories}
        onClick={handleClick}
      />,
    );

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });
});
