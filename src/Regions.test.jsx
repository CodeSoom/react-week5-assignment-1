import { render, screen } from '@testing-library/react';

import Regions from './Regions';

import regions from './fixtures/regions';

describe('Regions', () => {
  context('데이터가 있을 때', () => {
    it('지역 리스트를 화면에 렌더한다.', () => {
      render(<Regions regions={regions} />);

      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });

  context('데이터가 없을 때', () => {
    it('지역 리스트를 화면에 렌더한다.', () => {
      const emptyRegions = [];

      render(<Regions regions={emptyRegions} />);

      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
  });
});
