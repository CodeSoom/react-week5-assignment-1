import React from 'react';
import { render } from '@testing-library/react';

import CategoriesContainer from './CategoriesContainer';

describe('CategoriesContainer', () => {
  it('카테고리 리스트가 보인다.', () => {
    const { container, getByText } = render(<CategoriesContainer />);
  });
});
