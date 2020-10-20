import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Category from './Category';

describe('Category', () => {
  const handleCategoryClick = jest.fn();

  const categoryRender = ({ category }) => render((
    <Category onClick={handleCategoryClick} category={category} />
  ));

  it('버튼 클릭 시 onClick 핸들러가 실행된다.', () => {
    const { getByText } = categoryRender({ category: '한식' });
    const button = getByText(/한식/);

    expect(button).not.toBeNull();

    expect(handleCategoryClick).not.toBeCalled();

    fireEvent.click(button);

    expect(handleCategoryClick).toHaveBeenCalledTimes(1);
  });
});
