import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  const items = [{ id: 1, name: '서울' }, { id: 2, name: '대전' }];

  it('items가 출력됩니다.', () => {
    const { container } = render(<List items={items} />);

    items.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });
});
