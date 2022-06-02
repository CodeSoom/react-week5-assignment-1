import { render } from '@testing-library/react';

import Regions from './Regions';

import regions from '../../fixtures/regions';

describe('Regions', () => {
  const renderRegions = (changeRegionName) =>
    render(<Regions regions={regions} changeRegionName={changeRegionName} />);

  it('"region"버튼을 렌더한다', () => {
    const { getByRole } = renderRegions();

    regions.forEach((region) => {
      expect(getByRole('button', { name: region.name })).toBeInTheDocument();
    });
  });

  it('"changeRegionName"을 호출하면 호출한 지역 버튼에 "(V)"표시가 추가된다', () => {
    const { getByText } = renderRegions(regions[0]);

    expect(getByText(`${regions[0].name}(V)`)).toBeInTheDocument();
  });
});
