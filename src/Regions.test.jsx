import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  function renderRegions({ regions }) {
    return render((
      <Regions regions={regions} />
    ));
  }

  context('지역 목록이 있을 때', () => {
    it('지역 목록이 생성되면', () => {
      const regions = [
        { id: 1, name: '서울' },
        { id: 11, name: '독도' },
      ];

      const { queryByText } = renderRegions({ regions });

      expect(queryByText(/서울/)).not.toBeNull();
      expect(queryByText(/독도/)).not.toBeNull();
    });
  });

  context('지역 목록이 없을 때', () => {
    it('지역 목록이 생성되지 않으면', () => {
      const regions = [];

      const { queryByText } = renderRegions({ regions });

      expect(queryByText(/지역이 없습니다/)).not.toBeNull();
    });
  });
});
