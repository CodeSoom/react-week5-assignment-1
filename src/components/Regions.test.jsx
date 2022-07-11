import { render, fireEvent } from '@testing-library/react';

import Regions from './Regions';

import regions from '../fixtures/regions';

describe('Regions', () => {
  const defaultRegion = regions[0];

  const handleClickRegion = jest.fn();

  function renderRegion({ selectedRegion } = {}) {
    return render(
      <Regions
        regions={regions}
        selectedRegion={selectedRegion}
        onClick={handleClickRegion}
      />,
    );
  }

  it('지역 목록이 보여집니다.', () => {
    const { container } = renderRegion();

    regions.forEach(({ name }) => {
      expect(container).toHaveTextContent(name);
    });
  });

  it('region을 클릭하면 handleClickRegion이 호출됩니다', () => {
    const { getByRole } = renderRegion();

    fireEvent.click(getByRole('button', { name: defaultRegion.name }));

    expect(handleClickRegion).toHaveBeenCalledWith(defaultRegion.name);
  });

  it('선택되었으면 (V)가 함께 보여집니다.', () => {
    const { getByRole } = renderRegion({ selectedRegion: defaultRegion.name });

    expect(getByRole('button', { name: `${defaultRegion.name}(V)` })).toBeInTheDocument();
  });
});
