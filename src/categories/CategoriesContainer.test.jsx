import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';

jest.mock('react-redux');

describe('CategoriesContainer', () => {
  useSelector.mockImplementation((selector) => selector({
    categories: [{ id: 1, name: '한식' }],
  }));
  const { getByText } = render((
    <CategoriesContainer />
  ));

  describe('제목', () => {
    it('카테고리 제목과 한식이 보인다', () => {
      expect(getByText(/카테고리/)).not.toBeNull();
      expect(getByText(/한식/)).not.toBeNull();
    });
  });
});
