import { fireEvent, render, screen } from '@testing-library/react';

import Regions from './Regions';
import regions from './fixtures/regions';

jest.mock('react-redux');
jest.mock('./services/api');

describe('Regions', () => {
  const checkRegion = jest.fn();

  const renderRegions = (passRegions) => render(
    <Regions regions={passRegions} onUpdateCheckedRegion={checkRegion} />,
  );

  context('데이터가 있을 때', () => {
    it('지역 리스트를 화면에 렌더한다.', () => {
      renderRegions(regions);

      expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('지역을 체크하는 액션을 실행한다.', () => {
      renderRegions(regions);

      fireEvent.click(screen.getAllByRole('button')[0]);

      expect(checkRegion).toBeCalledWith(1);
    });
  });

  context('데이터가 없을 때', () => {
    it('빈 화면이 렌더된다.', () => {
      const emptyRegions = [];

      renderRegions(emptyRegions);

      expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
    });
  });
});
