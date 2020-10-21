import React from 'react';

import { render } from '@testing-library/react';

import List from './List';

describe('List', () => {
  context('items가 주어지면,', () => {
    const items = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

    it('items가 출력됩니다.', () => {
      const { container } = render(<List items={items} />);

      items.forEach((item) => {
        expect(container).toHaveTextContent(item);
      });
    });
  });
});
