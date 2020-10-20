import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import List from './List';

describe('List', () => {

  context('itemList가 주어지면,', () => {
    const itemList = ['서울', '대전', '대구', '부산', '광주', '강원도', '인천'];

    it('itemList가 출력됩니다.', () => {
      const { container } = render(<List itemList={itemList} />);

      itemList.forEach((item) => {
        expect(container).toHaveTextContent(item);
      });
    });
  });
});