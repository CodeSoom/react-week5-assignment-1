import { screen, render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');
jest.mock('./services/api');

describe('CategoriesContainer', () => {
  it('카테고리 리스트를 화면에 렌더한다.', () => {
    render(<CategoriesContainer />);

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
