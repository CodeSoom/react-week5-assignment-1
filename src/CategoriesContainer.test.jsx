import { screen, render } from '@testing-library/react';
import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('카테고리 리스트를 화면에 렌더한다.', () => {
    render(<CategoriesContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
