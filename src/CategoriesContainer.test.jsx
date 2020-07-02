import React from 'react';

import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  context('with categories', () => {
    it('카테고리 항목들이 보인다.', () => {
      const { getByText } = render(
        <CategoriesContainer />,
      );

      expect(getByText(/한식/)).not.toBeNull();
      expect(getByText(/중식/)).not.toBeNull();
      expect(getByText(/일식/)).not.toBeNull();
      expect(getByText(/양식/)).not.toBeNull();
      expect(getByText(/분식/)).not.toBeNull();
    });
  });
});
