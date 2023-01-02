import { render, screen } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  context('지역 리스트가 있을 때', () => {
    it('리스트는 렌더한다.', () => {
      const regions = [
        { id: 1, regions: '서울' },
        { id: 2, regions: '인천' },
      ];

      render(<Regions regions={regions} />);

      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });

  context('지역 리스트가 없을 때', () => {
    it('리스트는 렌더하지 않는다.', () => {
      const regions = [];

      render(<Regions regions={regions} />);

      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
  });
});
