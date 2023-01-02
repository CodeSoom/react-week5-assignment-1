import { screen, render } from '@testing-library/react';
import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('화면에 렌더한다.', () => {
    render(<CategoriesContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
