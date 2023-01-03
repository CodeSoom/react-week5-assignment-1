import { fireEvent, render, screen } from '@testing-library/react';

import Category from './Category';

describe('Category', () => {
  it('checkCategory 액션이 실행된다.', () => {
    const category = { id: 1, name: '한식' };
    const checkCategory = jest.fn();

    render(<Category category={category} onCheckCategory={checkCategory} />);

    fireEvent.click(screen.getByRole('button', { name: '한식' }));

    expect(checkCategory).toBeCalled();
  });
});
