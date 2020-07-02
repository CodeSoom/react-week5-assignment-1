import React from 'react';
import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  context('with regions', () => {
    it("show region's name of '서울'", () => {
      const regions = [{ id: 1, name: '서울' }];
      const { container } = render(<Regions regions={regions} />);

      expect(container).toHaveTextContent('서울');
    });
  });
  context('without regions', () => {
    it('can see text about not found message', () => {
      const regions = [];
      const { container } = render(<Regions regions={regions} />);
      expect(container).toHaveTextContent('지역 정보가 없습니다.');
    });
  });
});
