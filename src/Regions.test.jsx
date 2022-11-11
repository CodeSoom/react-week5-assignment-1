import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  const handleClick = jest.fn();

  function renderRegions({ regionLists, selectedRegionName }) {
    return render((<Regions
      regions={regionLists}
      onClick={handleClick}
      selectedRegionName={selectedRegionName}
    />));
  }

  it('Regions가 렌더링된다.', () => {
    const { getByText } = renderRegions({
      regionLists: regions,
    });

    expect(getByText('서울')).not.toBeNull();
    expect(getByText('대전')).not.toBeNull();
  });

  it('지역을 클릭하면 선택된 지역에 체크 표시가 붙는다.', () => {
    const { getByText } = renderRegions({
      regionLists: regions,
      selectedRegionName: '대전',
    });

    fireEvent.click(getByText('대전'));

    expect(handleClick).toBeCalled();
    expect(getByText('대전✅')).not.toBeNull();
  });
});
