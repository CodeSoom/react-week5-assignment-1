import { fireEvent, render, screen } from '@testing-library/react';

import Category from './Category';
import categories from './fixtures/categories';

describe('Category', () => {
  const checkCategory = jest.fn();

  it('카테고리가 화면에 렌더 된다.', () => {
    categories.forEach((category) => {
      render(
        <Category
          category={category}
          onCheckCategory={checkCategory}
        />,
      );
    });

    expect(screen.getByRole('button', { name: '한식' }));
    expect(screen.getByRole('button', { name: '일식' }));
    expect(screen.getByRole('button', { name: '중식' }));
  });

  it('카테고리 체크 액션이 실행 된다.', () => {
    categories.forEach((category) => {
      render(
        <Category
          category={category}
          onCheckCategory={checkCategory}
        />,
      );
    });

    fireEvent.click(screen.getByRole('button', { name: '한식' }));

    expect(checkCategory).toBeCalledTimes(1);
  });
});
