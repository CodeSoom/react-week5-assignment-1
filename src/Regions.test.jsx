import { render, screen, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import { regions as regionList } from '../fixtures/data';

jest.mock('react-redux');

describe('Regions', () => {
  const handleClick = jest.fn();

  const renderRegions = ({ regions = [], selectedRegion = null }) => render((
    <Regions
      regions={regions}
      selectedRegion={selectedRegion}
      onClick={handleClick}
    />
  ));

  context('지역 데이터가 없을 시', () => {
    it('지역 목록이 없어요! 문구가 랜더링 된다', () => {
      const { container } = renderRegions({
        regions: [],
      });

      expect(container).toHaveTextContent('지역 목록이 없어요!');
    });
  });

  context('지역 데이터가 있을 시', () => {
    it('지역 목록이 나타난다', () => {
      renderRegions({ regions: regionList });

      expect(screen.getByText('서울')).not.toBeNull();
    });

    it('지역을 선택하면 handleClick이 호출된다', () => {
      const region = regionList[0];
      renderRegions({ regions: regionList });

      expect(handleClick).not.toBeCalled();

      fireEvent.click(screen.getByText(region.name));

      expect(handleClick).toBeCalledWith(region.name);
    });
  });

  context('지역 아이디가 있을 시', () => {
    it('"V"와 함께 선택된 지역이 랜더링된다', () => {
      renderRegions({
        regions: regionList[0],
        selectedRegion: regionList[0].id,
      });

      expect(screen.queryByText(`${regionList[0].name}(V)`)).toBeNull();
    });
  });

  context('지역 아이디가 없을 시', () => {
    it('"V"가 랜더링되지 않는다', () => {
      const region = regionList[0];
      const { container } = renderRegions({
        regions: region,
        selectedRegion: null,
      });

      expect(container).not.toHaveTextContent('(V)');
    });
  });
});
