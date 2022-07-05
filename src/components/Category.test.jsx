import { render } from '@testing-library/react';

import Category from './Category';

describe('Category', () => {
  it('카테고리 목록이 보여집니다.', () => {
    const categories = [
      {
        id: 1, name: '한식',
      },
    ];

    const { container } = render((
      <Category
        categories={categories}
      />
    ));

    expect(container).toHaveTextContent('한식');
  });
});
