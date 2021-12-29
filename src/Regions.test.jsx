import { render } from '@testing-library/react';

import { regionsData } from './fixtures';
import Regions from './Regions';

describe('Regions', () => {
  const renderRegions = (regions) => render(<Regions regions={regions} />);

  context('지역정보가 없으면,', () => {
    it('사용자에게 안내 메시지를 보여준다.', () => {
      const regions = [];
      const { getByText } = renderRegions(regions);

      expect(getByText(/지역 정보를 가져오세요./)).toBeInTheDocument();
    });
  });

  context('지역정보가 있으면,', () => {
    it('지역정보를 화면에 보여준다.', () => {
      const { getByText } = renderRegions(regionsData);

      expect(getByText(regionsData[0].name)).not.toBeNull();
      expect(getByText(regionsData[1].name)).not.toBeNull();
    });
  });
});
