import { render } from '@testing-library/react';
import categories from '../fixtures/categories';

import Categories from './Categories';

describe('Categories', () => {
  it('카테고리 목록이 보여집니다.', () => {
    const { container } = render((
      <Categories
        categories={categories}
      />
    ));

    categories.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
