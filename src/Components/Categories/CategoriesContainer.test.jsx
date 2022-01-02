import { render, fireEvent } from '@testing-library/react';
import { useSelector, useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { CATEGORIES } from '../../lib/fixtures';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  const dispatch = jest.fn();

  useDispatch.mockImplementation(() => dispatch);
  useSelector.mockImplementation((selector) =>
    selector({
      categories: CATEGORIES,
      category: CATEGORIES[0],
    })
  );

  it('컴포넌트가 깨지지 않고 정상적으로 렌더링됩니다', () => {
    const { container } = render(<CategoriesContainer />);

    expect(container).toHaveTextContent('양식');
  });

  it('카테고리를 클릭하면 dispatch가 실행된다', () => {
    const { getByRole } = render(<CategoriesContainer />);

    const button = getByRole('button', { name: '양식' });

    fireEvent.click(button);

    expect(dispatch).toHaveBeenCalled();
  });
});
