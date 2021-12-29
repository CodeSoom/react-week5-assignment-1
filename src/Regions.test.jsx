import { render } from '@testing-library/react';

import Regions from './Regions';

describe('Regions', () => {
  const regions = [];
  const renderRegions = () => render(<Regions regions={regions} />);

  context('지역정보가 없으면,', () => {
    it('사용자에게 안내 메시지를 보여준다.', () => {
      const { getByText } = renderRegions();

      expect(getByText(/지역 정보를 가져오세요./)).toBeInTheDocument();
    });
  });

  context('지역정보가 있으면,', () => {

  });
});
