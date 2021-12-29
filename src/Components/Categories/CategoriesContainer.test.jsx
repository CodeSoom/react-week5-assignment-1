import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

import { CATEGORIES } from '../../lib/fixtures';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) =>
    selector({
      categories: CATEGORIES,
    })
  );

  it('컴포넌트가 깨지지 않고 정상적으로 렌더링됩니다', () => {
    const { container } = render(<CategoriesContainer />);

    expect(container).toHaveTextContent('한식');
  });
});
