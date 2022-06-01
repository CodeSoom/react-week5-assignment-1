import { render } from '@testing-library/react';

import CategoryContainer from './CategoryContainer';

describe('CategoryContainer', () => {
  const { getByText } = render((
    <CategoryContainer />
  ));

  describe('제목', () => {
    it('카테고리 제목이 보인다', () => {
      expect(getByText(/카테고리/)).not.toBeNull();
    });
  });
});
