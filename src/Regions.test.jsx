import { render, fireEvent } from '@testing-library/react';

import { regionsData } from './fixtures';
import Regions from './Regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  const renderRegions = ({
    regions,
    activeId,
    onClick,
  }) => render(
    <Regions
      regions={regions}
      activeId={activeId}
      onClick={onClick}
    />,
  );

  context('지역정보가 없으면,', () => {
    it('사용자에게 안내 메시지를 보여준다.', () => {
      const regions = [];
      const { getByText } = renderRegions({
        regions,
      });

      expect(getByText(/지역 정보를 가져오세요./)).toBeInTheDocument();
    });
  });

  context('지역정보가 있으면,', () => {
    it('지역정보를 화면에 보여준다.', () => {
      const { getByText } = renderRegions({
        regions: regionsData,
      });

      expect(getByText(regionsData[0].name)).not.toBeNull();
      expect(getByText(regionsData[1].name)).not.toBeNull();
    });

    it('특정 지역을 클릭하면, onClick 이벤트가 실행된다.', () => {
      const { getByText } = renderRegions({
        regions: regionsData,
        onClick: handleClick,
      });

      fireEvent.click(getByText(regionsData[0].name));
      expect(handleClick).toBeCalled();
    });

    it('특정 지역 id와 activeId가 일치하면, 지역 정보 옆에 (V) 텍스트가 표시된다.', () => {
      const { getByText } = renderRegions({
        regions: regionsData,
        activeId: 1,
      });

      const regex = new RegExp(`${regionsData[0].name}`);
      expect(getByText(regex)).toHaveTextContent(/(V)/);
    });
  });
});
